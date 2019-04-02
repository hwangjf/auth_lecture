class ApplicationController < ActionController::API

  def encode_token(user_id)
    # take in user id and return a jwt
    JWT.encode({user_id: user_id}, ENV["SUPER_SECRET_KEY"])
  end

  def token
    # get token from headers
    request.headers["Authorization"]
  end

  def decode_token
    # decode the token in headers and return the user id
    JWT.decode(token, ENV["SUPER_SECRET_KEY"])[0]["user_id"]
  end

  def curr_user
    # return the user that logged in else return nil (falsey)
    user_id = decode_token
    # if no user is found
    user_id && User.find(user_id)
  end

  def logged_in
    # check to see if someone is logged in the call stack is similar to good old CLI
    # |> token # get token from headers
    # |> decode_token # decode token
    # |> curr_user # current user_id && User.find(user_id)
    
    # return true or false 
    !!curr_user
  end

  def find_user
    User.find(params[:id])
  end

  def authorized_user
    curr_user.id == find_user.id
  end

  def check_authorization
    # call authorized_user
    # if they are not authorized deny request
    # if they are authorized we good
    if !authorized_user
      render json: {errors: "check yo self"}
    end
  end

end
