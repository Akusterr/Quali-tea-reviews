Rails.application.routes.draw do
  resources :reviews
  resources :teas
  resources :users

  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
