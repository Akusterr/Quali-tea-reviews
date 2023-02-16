class UserSerializer < ActiveModel::Serializer
  attributes :id, :location, :image, :username, :password_digest
end
