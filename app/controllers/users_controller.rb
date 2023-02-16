class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]
    before_action :authorize, only: [:update, :destroy]

    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        render json: User.all, status: :ok
    end


    def show
        user = User.find(params[:id])
        render json: user, status: 200
    end

    def create
        user = User.create!(user_params)
        # session[:user_id] = user.id
        render json: user, status: :created
    end

    def update 
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {}, status: :ok
    end

    private

    def user_params
        params.permit(:name, :location, :image, :username, :password, :email)
    end

    def not_found
        render json: { error: "User not found" }, status: :not_found
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session[:user_id] == @current_user.id 
    end
end
