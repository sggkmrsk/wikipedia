Rails.application.routes.draw do
  root to:"pages#index"
  resources :pages ,only: [:index,:show,:create,:update,:destroy]
end
