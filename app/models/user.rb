class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :teas, through: :reviews

    validates :email, presence: true
    # validates :email, uniqueness: true, on: :create
    # validates :password, uniqueness: true, on: :create
end
