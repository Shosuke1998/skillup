class SkillsController < ApplicationController
  before_action :authenticate_user!, only: [:test, :test2]
  def index
  end

  def study
  end

  def test
    @user = User.new
  end

  def test2
  end

  def update
    @user = User.find(params[:id])
    @user.update(pre_score_params)
    @user.update(input_words_params)
    unless @user.valid?
      redirect_to root_path
      flash[:notice] = "得点が保存できませんでした"
    end
  end

  def rank
    @users = User.all.order(pre_score: :DESC).limit(3)
    @verb_users = User.all.order(input_words: :DESC).limit(3)
  end

  

  private
  def pre_score_params
    params.permit(:pre_score)
  end
   
  def input_words_params
    params.permit(:input_words)
  end
end
