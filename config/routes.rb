Rails.application.routes.draw do
  devise_for :users
  root to:"top#index"
  resources :users, only: [:index, :edit, :update]
  resources :top ,only: :index
  resources :howtos ,only: :index
  resources :pages ,only: [:index,:new,:show,:create,:edit,:update,:destroy] do
    resources :contents ,only: [:new,:edit,:create,:update,:destroy]
    resources :comments ,only: [:new,:create,:destroy]
  end
  resources :searches,only: :index
end