class Page < ApplicationRecord
  belongs_to :user
  has_many :contents
  # has_many :conmmets
end
