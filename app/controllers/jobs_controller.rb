class JobsController < ApplicationController
  before_action :authenticate_user!, only: [:edit, :create, :new]
  before_action :set_job, only: [:show, :edit, :update]

  # GET /jobs
  # GET /jobs.json
  def index
    job_ids = Booking.joins(:payment).select(:job_id).pluck(:job_id) #JOBS ONLY WITH PAYMENT PROCESSED
    @jobs = Job.where(id: job_ids).order(created_at: :desc).paginate(page: params[:page], per_page: 6)
  end

  # GET /jobs/1
  # GET /jobs/1.json
  def show
    @users = User.all.index_by(&:id)
  end

  # GET /jobs/new
  def new
    @lessons = Lesson.all
    @job = Job.new
  end

  # GET /jobs/1/edit
  def edit
  end

  # POST /jobs
  # POST /jobs.json
  def create
    @lessons = Lesson.all
    @job = Job.new(job_params)

    respond_to do |format|
      if @job.save
        @booking = @job.create_booking(params[:job][:lesson_id])
        format.html { redirect_to new_payment_url(booking_id: @booking) }
        format.json { render :show, status: :created, location: @job }
      else
        flash[:error] = @job.errors.full_messages.to_sentence
        format.html { render :new }
        format.json { render json: @job.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /jobs/1
  # PATCH/PUT /jobs/1.json
  def update
    @lessons = Lesson.all
    respond_to do |format|
      if @job.update(job_params)
        format.html { redirect_to recent_jobs_url, notice: 'Job updated successfully.' }
        format.json { render :show, status: :ok, location: @job }
      else
        flash[:error] = @job.errors.full_messages.to_sentence
        format.html { render :edit }
        format.json { render json: @job.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job
      @job = Job.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def job_params
      params.require(:job).permit(:vehicle_type, :phone_number, :address, :description, :location, :user_id)
    end
end
