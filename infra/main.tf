module "s3_bucket" {
  source = "./modules/s3_bucket"
  
  aws_s3_bucket = "my-static-dashboard-bucket-${random_string.suffix.result}"
}

resource "random_string" "suffix" {
  length  = 8
  special = false
  upper   = false
}


