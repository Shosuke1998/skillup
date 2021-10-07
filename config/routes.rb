Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to:'skills#index'
  resources :skills, only: [:index, :update] do
    collection do
      get 'study'
      get 'test'
      get 'test2'
      get 'rank'
      get 'preposition'
      get 'exp_preposition'
      get 'preposition_img'
      get 'opposite'
      get 'test3'
      get 'opposite_sheet'
      get 'similar'
      get 'similar_problem'
      get 'similar_sheet'
      get 'unexpect'
      get 'unexpect_sheet'
    end
  end
  resources :users, only: :show
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#guest_sign_in'
  end
end
