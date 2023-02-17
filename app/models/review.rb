class Review < ApplicationRecord
    belongs_to :tea
    belongs_to :user 

    validates :tea_rating, :tea_comment, presence: true
    validates :tea_rating, comparison: {less_than_or_equal_to: 5}
end
