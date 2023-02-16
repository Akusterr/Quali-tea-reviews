class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :teas, through: :reviews

    # validates :username, uniqueness: true, on: :create
    # validates :password, uniqueness: true, on: :create
end
