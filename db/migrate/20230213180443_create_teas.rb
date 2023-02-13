class CreateTeas < ActiveRecord::Migration[7.0]
  def change
    create_table :teas do |t|
      t.string :brand
      t.string :style
      t.boolean :herbal
      t.string :origin
      t.string :image

      t.timestamps
    end
  end
end
