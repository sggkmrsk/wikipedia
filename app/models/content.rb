class Content < ApplicationRecord
  validates :topic, presence: true
  belongs_to :user
  belongs_to :page
  mount_uploader :image, ImageUploader
end
