class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name, presence: true, length: { maximum: 6 }
  validates :pre_score, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 18 }
  validates :input_words, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 24 }   
  validates :preposition_score, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 24 }   
  validates :unexp_score, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 46 }   
  validates :similar_score, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 40 }   

  def self.guest
    find_or_create_by!(email: 'guest@example.com') do |user|
      user.password = SecureRandom.urlsafe_base64
      # user.confirmed_at = Time.now  # Confirmable を使用している場合は必要
      # 例えば name を入力必須としているならば， user.name = "ゲスト" なども必要
      user.name = "ゲスト"
      user.pre_score = 0
      user.input_words = 0
      user.preposition_score = 0
      user.unexp_score = 0
      user.similar_score = 0
    end
  end

end
