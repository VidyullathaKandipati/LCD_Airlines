Rails.application.routes.draw do
  get 'pages/about', as: 'about'

  root :to => 'flights#search'
  resources :reservations
  resources :users
  resources :flights
  resources :planes

  get '/login' => 'session#new', as: 'login'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
