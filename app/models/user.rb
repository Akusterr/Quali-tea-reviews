class User < ApplicationRecord
    has_many :reviews
    has_many :teas, through: :reviews
end
