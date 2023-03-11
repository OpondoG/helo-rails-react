# frozen_string_literal: true

Rails.application.routes.draw do
  get 'messages/random_greeting', to: 'messages#random_greeting'
  root 'messages#random_greeting'
end
