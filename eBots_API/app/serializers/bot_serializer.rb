class BotSerializer
	include FastJsonapi::ObjectSerializer
	
	attributes :id, :name, :image_url, :price, :for_sale
	belongs_to :owner
end
