class ReviewsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Review.all, each_serializer: ReviewTeaSerializer, status: :ok
    end


    def show
        review = Review.find(params[:id])
        render json: review, serializer: ReviewTeaSerializer, status: 200
    end

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created
    end

     def update 
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        render json: {}, status: :ok
    end

    private

    def review_params
        params.permit(:tea_rating, :tea_comment, :user_id, :tea_id)
    end

    def not_found 
        render json: {"error": "review not found"}, status: :not_found
    end

    def invalid(error)
        render json: { error: error.message }, status: 422
    end
end
