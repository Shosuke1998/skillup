Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to:'skills#index'
  resources :skills, only: :index do
    collection do
      get 'study'
    end
  end
end
