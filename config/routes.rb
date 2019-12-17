Rails.application.routes.draw do
  devise_for :users
  root to:"pages#top"
  resources :users, only: [:index, :edit, :update]
  resources :pages ,only: [:index,:new,:show,:create,:edit,:update,:destroy] do
    resources :contents ,only: [:index,:edit,:create,:update]
  end
end