class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :title,               null: false, default: ""
      t.text :summary,               null: false
      t.string :image,               default: ""
      t.references :user,            null: false, foreign_key: true
      t.timestamps
    end
  end
end
