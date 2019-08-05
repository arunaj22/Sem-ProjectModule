json.extract! job, :id, :vehicle_type, :phone_number, :address, :description, :location, :user_id, :created_at, :updated_at
json.url job_url(job, format: :json)
