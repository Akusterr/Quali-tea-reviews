class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end


    def show
        user = User.find(params[:id])
        render json: user, status: 200
    end
end
