Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to:'skills#index'
  resources :skills, only: [:index, :update,] do
    collection do
      get 'study'
      get 'test'
      get 'test2'
      get 'rank'
    end
  end
  resources :users, only: :show
end
