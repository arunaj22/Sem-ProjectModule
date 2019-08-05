class PaymentsController < ApplicationController
	before_action :authenticate_user!

	def new
		@booking_id = params[:booking_id]
		@payment = Payment.new
	end

	def create
		@payment = Payment.new
		@payment.booking_id = params[:payment][:booking_id]
		@payment.card_type = params[:payment][:card_type]
		@payment.card_number = params[:payment][:card_number]

		respond_to do |format|
      if @payment.save
        format.html { redirect_to recent_jobs_url, notice: 'Job posted successfully.' }
        format.json { render :show, status: :created, location: @job }
      else
        flash[:error] = @payment.errors.full_messages.to_sentence
        format.html { render :new }
        format.json { render json: @job.errors, status: :unprocessable_entity }
      end
    end
	end

end