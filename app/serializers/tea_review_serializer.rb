class TeaReviewSerializer < ActiveModel::Serializer
  attributes :id, :brand, :style, :origin, :image

  has_many :reviews
end
