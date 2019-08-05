class Admin::BookingsController < ApplicationController
	layout 'admin'

	def index
		@users = User.where('role=?', 'user').index_by(&:id)
		@jobs = Job.all.index_by(&:id)
		@lessons = Lesson.all.index_by(&:id)
		@bookings = Booking.all
	end
end