# frozen_string_literal: true

class MessagesController < ApplicationController
  def random_greeting
    message = Message.order('RANDOM()').first
    render json: { greeting: message.greeting }
  end
end
