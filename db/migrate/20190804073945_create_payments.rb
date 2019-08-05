class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.string :card_number
      t.string :card_type
      t.integer :booking_id

      t.timestamps
    end
  end
end
