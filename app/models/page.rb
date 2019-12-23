class Page < ApplicationRecord
  validates :title, presence: true
  belongs_to :user
  has_many :contents
  has_many :comments
  mount_uploader :image, ImageUploader
end
