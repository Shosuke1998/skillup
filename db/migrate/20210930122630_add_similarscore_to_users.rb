class AddSimilarscoreToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :similar_score, :integer
  end
end
