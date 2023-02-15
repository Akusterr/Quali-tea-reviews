class TeasController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid


    def index
        render json: Tea.all, each_serializer: TeaReviewSerializer, status: :ok
    end


    def show
        tea = Tea.find(params[:id])
        render json: tea, serializer: TeaReviewSerializer, status: 200
    end

    def create 
        tea = Tea.create!(tea_params)
        render json: tea, status: :created
    end

     def update 
        tea = Tea.find(params[:id])
        tea.update!(tea_params)
        render json: tea, status: :accepted
    end

    def destroy
        tea = Tea.find(params[:id])
        tea.destroy
        render json: {}, status: :ok
    end

    private

    def tea_params
        params.permit(:brand, :style, :origin, :image)
    end

    def not_found 
        render json: {"error": "Tea not found"}, status: :not_found
    end

    def invalid(error)
        render json: { error: error.message }, status: 422
    end

end
