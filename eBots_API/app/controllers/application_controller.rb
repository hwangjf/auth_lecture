class ApplicationController < ActionController::API

  def auth_header
    request.headers["Authorization"]
    # Bearer <JWT>
  end

  def encode_token(user_id)
    JWT.encode({user_id: user_id}, 'secret')
    # returns the hashed json web token or jwt
  end

  def decoded_token
    if auth_header
      begin  
        # JWT.deocde(auth_headers, 'secret')
        # decode the authorization key in headers
        # JWT.deocde(auth_headers, 'secret') => [{ "user_id"=> "2"}, {"alg"=> "HS256"}]
        # to send back the user_id
        JWT.decode(auth_headers, 'secret')[0]["user_id"]
      rescue
        nil
      end
    end
  end

  def curr_user
    if decoded_token
      User.find(decoded_token)
    end
    # the else is simply to return nil which is a falsey value
    # to be more explicit send back false
  end

  def logged_in
    !!curr_user
  end

  def authorized
    # if we want to protect many routes or large parts of your application 
    # make this a before action at this level and skip where necessary otherwise skip this part
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end

end
