# Default provider (us-east-1 for ACM certificates with CloudFront)
provider "aws" {
  region = "us-east-1"
}

# Provider alias for other regions if needed
provider "aws" {
  region = "us-east-1"
  alias = "east"
}