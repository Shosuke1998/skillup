class AddInputWordsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :input_words, :integer
  end
end
