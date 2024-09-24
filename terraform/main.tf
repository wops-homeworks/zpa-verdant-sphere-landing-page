module "s3Bucket" {
  source         = "./modules/s3_bucket"
  s3_bucket_name = var.s3_bucket_name
}
