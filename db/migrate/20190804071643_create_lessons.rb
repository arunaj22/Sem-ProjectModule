class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.date :date
      t.float :fee
      t.string :meeting_point
      t.string :vehicle_type

      t.timestamps
    end
  end
end
