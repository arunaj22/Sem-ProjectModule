class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :lesson_id
      t.integer :job_id
      t.integer :user_id

      t.timestamps
    end
  end
end
