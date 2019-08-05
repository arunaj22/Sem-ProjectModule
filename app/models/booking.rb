class Booking < ApplicationRecord
	belongs_to :user
	belongs_to :job
	has_one :lesson
	has_one :payment
end
