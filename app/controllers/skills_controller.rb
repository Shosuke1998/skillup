class SkillsController < ApplicationController
  def index
  end

  def study
  end

  def test
    @user = User.new
  end

  def update
    @user = User.find(params[:id])
    @user.update(pre_score_params)
  end

  private
  def pre_score_params
    params.permit(:pre_score)
  end
end
