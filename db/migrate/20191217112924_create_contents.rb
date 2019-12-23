class CreateContents < ActiveRecord::Migration[5.2]
  def change
    create_table :contents do |t|
      t.string :topic    ,null: false
      t.text :body
      t.string :image
      t.references :user ,null: false, foreign_key: true
      t.references :page ,null: false, foreign_key: true
      t.integer	:sort       ,null:false
      t.timestamps
    end
  end
end
