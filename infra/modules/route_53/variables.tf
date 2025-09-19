variable "aws_route53_zone_name" {
  description = "The name of the Route 53 zone"
  type        = string
}

variable "domain_name" {
  description = "The domain name of the Route 53 zone"
  type        = string
}

variable "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution"
  type        = string
}