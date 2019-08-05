class Payment < ApplicationRecord
	belongs_to :booking

	validates_presence_of :card_type, :card_number

	CARD_TYPES=['Visa', 'MasterCard', 'American Express', 'Discover', 'Diners Club', 'RuPay', 'JCB']
end
