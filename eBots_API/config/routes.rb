Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	namespace :api do
		namespace :v1 do
			resources :users
			resources :bots
			patch "/bots/:id/toggle_sale", to: "bots#toggle_sale"
			post "/bots/:id/purchase", to: "bots#purchase"
		end
	end
end
