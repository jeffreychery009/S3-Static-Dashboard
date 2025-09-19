output "aws_s3_bucket_id" {
  value = aws_s3_bucket.this.id
  description = "The ID of the S3 bucket"
}

output "aws_s3_bucket_domain_name" {
  value = aws_s3_bucket.this.bucket_domain_name
  description = "The domain name of the S3 bucket"
}