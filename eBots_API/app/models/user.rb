class User < ApplicationRecord
  has_many :bots, foreign_key: "owner_id"

  has_secure_password
end
