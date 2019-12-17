# README

* Database design
## usersテーブル
  |Column|Type|Options|
  |------|----|-------|
  |name|string|null: false,index: true|
  |email_address|string|null: false,unique: true|
  |password|string|null: false|

  ### Association
  - has_many :pages
  - has_many :contents
  - has_many :comments

## pagesテーブル
  |Column|Type|Options|
  |------|----|-------|
  |title|string|null: false|
  |user_id|references|null: false,foreign_key: true|

  ### Association
  - belongs_to :user
  - has_many :contents
  - has_many :conmmets

## contentsテーブル
  |Column|Type|Options|
  |------|----|-------|
  |topic|string|null: false|
  |body|text|null: false|
  |image|string||
  |user_id|references|null: false, foreign_key: true|
  |page_id|references|null: false, foreign_key: true|
  |sort|integer|null: false|
  |updated_at|datetime|null: false|

  ### Association
  - belongs_to :user
  - belongs_to :page

## commentsテーブル
  |Column|Type|Options|
  |------|----|-------|
  |body|text||
  |pages_id|references|null: false, foreign_key: true|
  |user_id|references|null: false, foreign_key: true|
  |timestamp|datetime|null: false|

  ### Association
  - belongs_to :user
  - belongs_to :page