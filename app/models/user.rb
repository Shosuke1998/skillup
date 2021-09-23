class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name, presence: true, length: { maximum: 6 }
  validates :pre_score, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  validates :input_words, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }   
end
