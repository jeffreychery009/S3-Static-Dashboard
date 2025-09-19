variable "aws_cloudfront_origin_access_control_name" {
  description = "The name of the CloudFront origin access control"
  type        = string
}

variable "aws_cloudfront_origin_access_control_description" {
  description = "The description of the CloudFront origin access control"
  type        = string
}

variable "s3_bucket_domain_name" {
  description = "The domain name of the S3 bucket"
  type        = string
}

variable "custom_domain_name" {
  description = "The custom domain name for CloudFront"
  type        = string
  default     = null
}

variable "acm_certificate_arn" {
  description = "The ARN of the ACM certificate"
  type        = string
  default     = null
}