class User < ApplicationRecord
    has_many :reviews
    has_many :teas, through: :reviews

    validates :name, presence: true
    validates :email, uniqueness: true, on: :create
end
