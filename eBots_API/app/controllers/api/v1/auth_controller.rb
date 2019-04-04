class Api::V1::AuthController < ApplicationController
  def login
    user = User.find_by(username: params[:username])

    if user && user.authorize(params[:password])
      render json: user
    else
      render json: {errors: "Please provide the correct username and password!"}
    end
  end

  def auto_login
    user_id = request.headers["Authorization"]["user_id"]
    user = User.find(user_id)

    if user
      render json: user
    else
      render json: {errors: "yo... try again mister"}
    end
  end
end