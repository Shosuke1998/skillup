class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up,keys: [:name, :pre_score, :input_words, :preposition_score, :unexp_score, :similar_score])
  end
end
