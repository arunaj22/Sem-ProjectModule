class Users::PasswordsController < Devise::PasswordsController
	
	def create
		flash[:error] = "Email configuration yet to be done"
		redirect_to root_url
	end
end