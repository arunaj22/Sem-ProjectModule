# CREATES ADMIN
user = User.new
user.name = "Admin User"
user.email = "admin@tradesman.com"
user.password = "admin123"
user.password_confirmation = "admin123"
user.role = "admin"
user.save(validate: false)
# CREATES LESSONS
10.times do
	Lesson.create(fee: Faker::Number.number(3).to_f, vehicle_type: Faker::Vehicle.car_type, date: Time.now, meeting_point: Faker::Address.street_name)
end