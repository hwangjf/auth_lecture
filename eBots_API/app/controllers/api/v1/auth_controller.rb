class Api::V1::AuthController < ApplicationController

  def login
    user = User.find_by(username: params[:username])

    # authenticate checks string versus password_digest
    if user && user.authenticate(params[:password])
      jwt = encode_token(user.id)
      
      # if username is in our database
      # and their password is authenticated
      # send back an encoded token to store on the browser
      # and user information
      render json: {user: UserSerializer.new(user), jwt: jwt}
    else 
      # something went wrong send back an error
      render json: {errors: "Check yo self"}
    end
  end

  # purpose of this method is to check the user and log them in automagically
  # if they have a stored token in their localStorage
  def auto_login
    if logged_in
      render json: curr_user
    else
      render json: {errors: "Check yo self"}
    end
  end

end