class User < ApplicationRecord

  validates :username, :session_token, presence: true, uniqueness:true
  validates :pw, presence: { message: 'Password can\'t be blank'}
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  attr_reader :password


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && BCrypt::Password.new(user.pw).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    if self.session_token.nil?
      new_token = User.generate_session_token
      self.session_token = new_token
    end
    true
  end

  def password=(password)
    @password = password
    self.pw = BCrypt::Password.create(password)
  end



end
