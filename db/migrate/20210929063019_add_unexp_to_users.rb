class AddUnexpToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :unexp_score, :integer
  end
end
