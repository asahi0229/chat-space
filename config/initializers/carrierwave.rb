require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.storage = :fog
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: Rails.application.secrets.aws_access_key_id,
    aws_secret_access_key: Rails.application.secrets.aws_secret_access_key,
    region: 'アジアパシフィック(東京)'
  }

  config.fog_directory  = 'asaho0229'
  config.asset_host = 'https://s3-アジアパシフィック(東京).amazonaws.com/asaho0229'
end
