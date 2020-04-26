class Content < ApplicationRecord
  validates :topic,:sort, presence: true
  belongs_to :user
  belongs_to :page
  mount_uploader :image, ImageUploader

  def self.search(search)
    return Content.all unless search
    Content.where('topic LIKE(?) or body LIKE(?)', "%#{search}%","%#{search}%")
  end
end