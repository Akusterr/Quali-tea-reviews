class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.float :tea_rating
      t.string :tea_comment
      t.integer :user_id
      t.integer :tea_id

      t.timestamps
    end
  end
end
