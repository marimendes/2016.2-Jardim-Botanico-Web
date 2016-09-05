Rails.application.routes.draw do
  get 'employees/new'

  devise_for :users
  get 'users/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
