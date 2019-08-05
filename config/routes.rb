Rails.application.routes.draw do
	
  root 'home#index'
  get 'support' => 'support#index'
  post 'supports' => 'support#create'
  get 'terms' => 'terms#index'
  devise_for :users, :controllers => { :passwords => "users/passwords", :registrations => "users/registrations" }

  resources :bookings
  resources :jobs, only: [:create, :new, :edit]
  resources :payments, only: [:create, :new]
  resources :messages, only: [:create, :index]
  get 'recent_jobs' => 'jobs#index'
  get 'job_details/:id' => 'jobs#show', as: :job_details
  namespace :admin do
    get 'dashboard' => 'dashboard#index'
  	resources :lessons
    get 'bookings' => 'bookings#index'
  end
end
