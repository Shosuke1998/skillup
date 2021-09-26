class RemoveInputScoreFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :input_scores, :integer
  end
end
