
require 'pp'
class ApplicationController < ActionController::API
    include ActionController::Cookies


    before_action :authorize

    private

    def authorize
        @current_user = User.find_by(id: session[:user_id]) 
        if !@current_user
            render json: {errors: "Not authorized, please log in"}
        else
            pp @current_user
            render json: @current_user
        end
    end

end
