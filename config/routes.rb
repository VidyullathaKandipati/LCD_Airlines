Rails.application.routes.draw do
  root :to => 'flights#search'
  resources :reservations
  resources :users
  resources :flights
  resources :planes
end
