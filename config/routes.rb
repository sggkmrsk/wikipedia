Rails.application.routes.draw do
  get 'pages/index'
  root to:"pages#index"
  resources :pages ,only: [:index,:show,:create,:update,:destroy]
end
