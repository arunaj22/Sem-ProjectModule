class MessagesController < ApplicationController
	def create
		@message = Message.new
		@message.user_id = params[:user_id]
		@message.job_id = params[:job_id]
		@message.body = params[:body]
		@message.recipient_id = params[:recipient_id]
		@message.save
		respond_to do |format|
      format.html { redirect_to request.referrer, notice: 'Quote sent' }
    end
	end

end