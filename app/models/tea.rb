class Tea < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :brand, :style, :image, presence: true
end
