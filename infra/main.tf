# Variables for GitHub Actions CI/CD
variable "github_owner" {
  description = "GitHub username or organization"
  type        = string
  default     = "jeffreychery"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default     = "S3-Static-Dashboard"
}

variable "github_branch" {
  description = "GitHub branch to deploy from"
  type        = string
  default     = "main"
}

resource "random_string" "suffix" {
  length  = 8
  special = false
  upper   = false
}

module "s3_bucket" {
  source = "./modules/s3_bucket"
  
  aws_s3_bucket = "my-static-dashboard-bucket-${random_string.suffix.result}"
}


# CloudFront distribution
module "cloudfront" {
  source = "./modules/cloudfront"
  
  aws_cloudfront_origin_access_control_name = "my-first-cloudfront-origin-access-control"
  aws_cloudfront_origin_access_control_description = "My CloudFront origin access control"
  s3_bucket_domain_name = module.s3_bucket.aws_s3_bucket_domain_name
}


# S3 bucket policy to allow CloudFront access to the S3 bucket
resource "aws_s3_bucket_policy" "cloudfront_access" {
  bucket = module.s3_bucket.aws_s3_bucket_id

  policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "AllowCloudFrontServicePrincipalReadOnly",
        "Effect": "Allow",
        "Principal": {
          "Service": "cloudfront.amazonaws.com"
        },
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::${module.s3_bucket.aws_s3_bucket_id}/*",
        "Condition": {
          "StringEquals": {
            "AWS:SourceArn": module.cloudfront.aws_cloudfront_distribution_arn
          }
        }
      }
    ]
  })
}


# GitHub Actions CI/CD IAM Configuration
data "aws_partition" "part" {}
data "aws_caller_identity" "me" {}

# 1) GitHub OIDC provider (create if you don't already have one in the account)
resource "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"

  client_id_list = ["sts.amazonaws.com"]

  thumbprint_list = [
    # GitHub Actions OIDC root cert thumbprint (current as of 2024/2025)
    "6938fd4d98bab03faadb97b34396831e3780aea1"
  ]
}

# 2) Role that GitHub can assume
resource "aws_iam_role" "gh_deploy" {
  name = "github-actions-deploy"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Federated = aws_iam_openid_connect_provider.github.arn
      },
      Action = "sts:AssumeRoleWithWebIdentity",
      Condition = {
        StringEquals = {
          "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
        },
        StringLike = {
          # Limit to a specific repo + branch
          "token.actions.githubusercontent.com:sub" = "repo:${var.github_owner}/${var.github_repo}:ref:refs/heads/${var.github_branch}"
        }
      }
    }]
  })
}

# 3) Tight permissions: only your bucket + CF distribution
data "aws_cloudfront_distribution" "dist" {
  id = module.cloudfront.aws_cloudfront_distribution_id
}

resource "aws_iam_policy" "gh_deploy_policy" {
  name = "github-actions-deploy-policy"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid      = "S3WriteSite",
        Effect   = "Allow",
        Action   = ["s3:PutObject","s3:DeleteObject","s3:PutObjectAcl"],
        Resource = "arn:${data.aws_partition.part.partition}:s3:::${module.s3_bucket.aws_s3_bucket_id}/*"
      },
      {
        Sid      = "S3ListBucket",
        Effect   = "Allow",
        Action   = ["s3:ListBucket"],
        Resource = "arn:${data.aws_partition.part.partition}:s3:::${module.s3_bucket.aws_s3_bucket_id}"
      },
      {
        Sid      = "InvalidateCloudFront",
        Effect   = "Allow",
        Action   = ["cloudfront:CreateInvalidation"],
        Resource = data.aws_cloudfront_distribution.dist.arn
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach" {
  role       = aws_iam_role.gh_deploy.name
  policy_arn = aws_iam_policy.gh_deploy_policy.arn
}

# Outputs for the infrastructure
output "s3_bucket_name" {
  value = module.s3_bucket.aws_s3_bucket_id
  description = "The name of the S3 bucket"
}

output "cloudfront_domain_name" {
  value = module.cloudfront.aws_cloudfront_distribution_domain_name
  description = "The domain name of the CloudFront distribution"
}

output "cloudfront_distribution_id" {
  value = module.cloudfront.aws_cloudfront_distribution_id
  description = "The ID of the CloudFront distribution"
}

output "cloudfront_distribution_url" {
  value = "https://${module.cloudfront.aws_cloudfront_distribution_domain_name}"
  description = "The URL of the CloudFront distribution"
}


output "github_actions_role_arn" {
  value = aws_iam_role.gh_deploy.arn
  description = "The ARN of the GitHub Actions IAM role for CI/CD"
}
