class AddPrepositionScoreToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :preposition_score, :integer
  end
end
