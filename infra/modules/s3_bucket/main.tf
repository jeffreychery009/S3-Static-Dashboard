resource "aws_s3_bucket" "this" {
    bucket = var.aws_s3_bucket

    tags = {
        Name        = var.aws_s3_bucket
        Environment = "Dev"
    }
  
}

resource "aws_s3_bucket_versioning" "this" {
    bucket = aws_s3_bucket.this.id

    versioning_configuration {
        status = "Enabled"
    }
  
}
