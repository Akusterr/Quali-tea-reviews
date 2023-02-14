class TeaSerializer < ActiveModel::Serializer
  attributes :id, :brand, :style, :origin, :image
end
