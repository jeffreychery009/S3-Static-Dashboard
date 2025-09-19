variable "aws_acm_certificate_name" {
  description = "The name of the ACM certificate"
  type        = string
}

variable "route53_zone_id" {
  description = "The Route 53 zone ID for certificate validation"
  type        = string
}

variable "domain_name" {
  description = "The domain name of the ACM certificate"
  type        = string
  
}