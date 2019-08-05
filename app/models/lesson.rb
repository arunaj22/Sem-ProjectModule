class Lesson < ApplicationRecord
	validates_presence_of :meeting_point, :fee, :date, :vehicle_type
end
