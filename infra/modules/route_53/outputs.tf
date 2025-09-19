output "route53_zone_id" {
  value = aws_route53_zone.this.zone_id
  description = "The ID of the Route 53 zone"
}

output "route53_name_servers" {
  value = aws_route53_zone.this.name_servers
  description = "The name servers of the Route 53 zone"
}
