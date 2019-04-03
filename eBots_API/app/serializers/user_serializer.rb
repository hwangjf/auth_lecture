class UserSerializer
	include FastJsonapi::ObjectSerializer
	
	attributes :id, :name, :username, :balance, :bio, :avatar_url, :bots
end
