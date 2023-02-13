class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image, :username, :password_digest
end
