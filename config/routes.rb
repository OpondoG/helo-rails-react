# frozen_string_literal: true

Rails.application.routes.draw do
  get 'messages/random_greeting', to: 'messages#random_greeting'
  root 'static_pages#home'
end
