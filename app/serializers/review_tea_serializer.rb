class ReviewTeaSerializer < ActiveModel::Serializer
  attributes :id, :tea_rating, :tea_comment, :user_id, :tea_id

  belongs_to :tea
end
