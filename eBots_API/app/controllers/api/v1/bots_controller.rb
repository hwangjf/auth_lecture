class Api::V1::BotsController < ApplicationController
	before_action :authorized

	def toggle_sale
		bot = Bot.find(params[:id])

		bot.update(for_sale: !bot.for_sale)

		render json: BotSerializer.new(bot)
	end

	def index
		byebug
		bots = Bot.where(for_sale: true)

		render json: BotSerializer.new(bots)
	end

	def purchase
		bot = Bot.find(params[:id])

		bot.update(for_sale: false)
		
		render json: BotSerializer.new(bot)
	end
	
end