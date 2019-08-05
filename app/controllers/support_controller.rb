class SupportController < ApplicationController
  def index
  end

  def create
  	flash[:error] = "Email Server activation required. Hence directing to Home page"
		redirect_to root_url
  end
end
