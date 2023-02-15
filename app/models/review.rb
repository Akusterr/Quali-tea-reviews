class Review < ApplicationRecord
    belongs_to :tea
    belongs_to :user 

    validates :tea_rating, :tea_comment, :user_id, :tea_id, presence: true
    validates :tea_rating, comparison: {less_than: 5 }
end
