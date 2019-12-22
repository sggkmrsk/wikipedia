Rails.application.routes.draw do
  devise_for :users
  root to:"top#index"
  resources :users, only: [:index, :edit, :update]
  resources :top ,only: :index
  resources :pages ,only: [:index,:new,:show,:create,:edit,:update,:destroy] do
    resources :contents ,only: [:new,:edit,:create,:update]
  end
end