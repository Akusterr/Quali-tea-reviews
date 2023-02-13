class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :location
      t.string :image
      t.string :username
      t.timestamps
    end
  end
end
