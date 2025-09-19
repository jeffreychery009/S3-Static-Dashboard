terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.0.0"
    }
  }
}

resource "aws_route53_zone" "this" {
    name = var.domain_name

    tags = {
        Name = var.aws_route53_zone_name
        Environment = "Production"
    }
}

# Route 53 record pointing to CloudFront distribution
resource "aws_route53_record" "cloudfront" {
    zone_id = aws_route53_zone.this.zone_id
    name    = var.domain_name
    type    = "A"

    alias {
        name                   = var.cloudfront_domain_name
        zone_id                = "Z2FDTNDATAQYW2"  # CloudFront hosted zone ID
        evaluate_target_health = false
    }
}

# Route 53 record for www subdomain
resource "aws_route53_record" "www" {
    zone_id = aws_route53_zone.this.zone_id
    name    = "www.${var.domain_name}"
    type    = "A"

    alias {
        name                   = var.cloudfront_domain_name
        zone_id                = "Z2FDTNDATAQYW2"  # CloudFront hosted zone ID
        evaluate_target_health = false
    }
}

