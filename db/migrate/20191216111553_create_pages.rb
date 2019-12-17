class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :title,               null: false, default: ""
      t.string :summary,             null: false, default: ""
      t.references :user,            null: false, foreign_key: true
      t.timestamps
    end
  end
end
