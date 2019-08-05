class User < ApplicationRecord
	
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates_presence_of :dob, :name
  has_many :bookings
  has_many :messages

  def update_role(role)
  	if role
  		self.update_columns(role: 'tradesman')
  	end
  end
end