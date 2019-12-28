class Page < ApplicationRecord
  validates :title, presence: true ,uniqueness: true
  belongs_to :user
  has_many :contents
  has_many :comments
  mount_uploader :image, ImageUploader

  def self.search(search)
    return Page.all unless search
    Page.where('title LIKE(?) or summary LIKE(?)', "%#{search}%","%#{search}%")
  end
end