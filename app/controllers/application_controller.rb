class ApplicationController < ActionController::Base
	skip_before_action :verify_authenticity_token
	# before_action :configure_permitted_parameters, if: :devise_controller?

	private

	def after_sign_in_path_for(resource)
		if resource.role == 'admin'
			admin_dashboard_url
		else
			root_url
		end
	end

	def after_sign_out_path_for(resource_or_scope)
		root_url
	end
	
	# protected

	# def configure_permitted_parameters
	# 	devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation, :name, :dob, :role])
	# end

end
