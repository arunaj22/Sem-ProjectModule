class Users::RegistrationsController < Devise::RegistrationsController
	before_action :configure_permitted_parameters, if: :devise_controller?
	
	def create
		super
		session[:tradesman] = nil
	end

	protected

	def configure_permitted_parameters
		devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation, :name, :dob, :role])
	end
end