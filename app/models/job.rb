class Job < ApplicationRecord
	belongs_to :user
	has_many :bookings
	has_many :messages
	validates_presence_of :location, :phone_number, :address, :description
	attr_accessor :lesson_id

	LOCATIONS=[
		"Dublin",
		"Antrim",
		"Armagh",
		"Carlow",
		"Cavan",
		"Clare",
		"Cork",
		"Derry",
		"Donegal",
		"Down",
		"Fermanagh",
		"Galway",
		"Kerry",
		"Kildare",
		"Kilkenny",
		"Laois",
		"Leitrim",
		"Limerick",
		"Longford",
		"Louth",
		"Mayo",
		"Meath",
		"Monaghan",
		"Offaly",
		"Roscommon",
		"Sligo",
		"Tipperary",
		"Tyrone",
		"Waterford",
		"Westmeath",
		"Wexford",
		"Wicklow"]

	def create_booking(lesson_id)
		vehicle_type = Lesson.find(lesson_id).vehicle_type
		booking = Booking.new
		booking.lesson_id = lesson_id
		booking.job_id = self.id
		booking.user_id = self.user_id
		booking.save
		self.update_columns(vehicle_type: vehicle_type)
		return booking.id
	end
end
