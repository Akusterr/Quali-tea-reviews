require 'byebug'
class UsersController < ApplicationController
skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users, status: :ok
    end


    def show
        render json: @current_user
    end

    def create
        # DO the following but in rubs then use userData to crate user instead of user_params
        # userData = {
        #     username: user_params.username,
        #     location: user_params.location,
        #     password_digest: sha256(user_params.password)
        # }
       user = User.create!(user_params)
       session[:user_id] = user.id
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
        params.permit(:username, :password, :location)
    end

end
