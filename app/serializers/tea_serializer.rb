class TeaSerializer < ActiveModel::Serializer
  attributes :id, :brand, :type, :origin, :image
end
