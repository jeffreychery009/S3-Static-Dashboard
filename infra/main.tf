resource "random_string" "suffix" {
  length  = 8
  special = false
  upper   = false
}

module "s3_bucket" {
  source = "./modules/s3_bucket"
  
  aws_s3_bucket = "my-static-dashboard-bucket-${random_string.suffix.result}"
}

# Route 53 hosted zone
resource "aws_route53_zone" "main" {
  name = "personal-dashboard.com"

  tags = {
    Name        = "dashboard-zone"
    Environment = "Production"
  }
}

# ACM Certificate for custom domain
module "acm" {
  source = "./modules/acm"
  
  domain_name = "personal-dashboard.com"  # Replace with your actual domain
  aws_acm_certificate_name = "dashboard-ssl-cert"
  route53_zone_id = aws_route53_zone.main.zone_id
}

# CloudFront distribution
module "cloudfront" {
  source = "./modules/cloudfront"
  
  aws_cloudfront_origin_access_control_name = "my-first-cloudfront-origin-access-control"
  aws_cloudfront_origin_access_control_description = "My CloudFront origin access control"
  s3_bucket_domain_name = module.s3_bucket.aws_s3_bucket_domain_name
  custom_domain_name = "personal-dashboard.com"  # Replace with your actual domain
  acm_certificate_arn = module.acm.aws_acm_certificate_arn
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

# Route 53 records pointing to CloudFront distribution
resource "aws_route53_record" "cloudfront" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "personal-dashboard.com"
  type    = "A"

  alias {
    name                   = module.cloudfront.aws_cloudfront_distribution_domain_name
    zone_id                = "Z2FDTNDATAQYW2"  # CloudFront hosted zone ID
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "www.personal-dashboard.com"
  type    = "A"

  alias {
    name                   = module.cloudfront.aws_cloudfront_distribution_domain_name
    zone_id                = "Z2FDTNDATAQYW2"  # CloudFront hosted zone ID
    evaluate_target_health = false
  }
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

output "cloudfront_distribution_url" {
  value = "https://${module.cloudfront.aws_cloudfront_distribution_domain_name}"
  description = "The URL of the CloudFront distribution"
}

output "custom_domain_url" {
  value = "https://personal-dashboard.com"  # Replace with your actual domain
  description = "The custom domain URL"
}

output "route53_name_servers" {
  value = aws_route53_zone.main.name_servers
  description = "The name servers for your domain - update your domain registrar with these"
}
