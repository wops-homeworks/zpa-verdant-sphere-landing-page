variable "aws_region" {
  description = "AWS region to deploy resources into"
  type        = string
  default     = "ap-southeast-2"
}

variable "environment" {
  description = "Environment variable for configuration"
  type        = string
  default     = "dev"
}

variable "s3_bucket_name" {
  description = "s3 Bucket Name for App"
  type        = string
  default     = "verdant-sphere-landing-fe"
}
