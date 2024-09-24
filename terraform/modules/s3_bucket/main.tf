resource "aws_s3_bucket" "this" {
  bucket        = var.s3_bucket_name
  force_destroy = true
  tags = {
    Terraform = true
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
