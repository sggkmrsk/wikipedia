class Comment < ApplicationRecord
  validates :comment, presence: true
  belongs_to :user
  belongs_to :page

  def self.search(search)
    return Conmmnt.all unless search
    Comment.where('comment LIKE(?)', "%#{search}%")
  end
end
