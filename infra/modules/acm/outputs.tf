output "aws_acm_certificate_arn" {
  value = aws_acm_certificate_validation.this.certificate_arn
  description = "The ARN of the validated ACM certificate"
}

output "aws_acm_certificate_domain_name" {
  value = aws_acm_certificate.this.domain_name
  description = "The domain name of the ACM certificate"
}

