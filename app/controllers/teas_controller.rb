class TeasController < ApplicationController


    def index
        render json: Tea.all, status: :ok
    end

    def show
        tea = Tea.all(params[:id])
        render json: tea, status: 200
    end

end
