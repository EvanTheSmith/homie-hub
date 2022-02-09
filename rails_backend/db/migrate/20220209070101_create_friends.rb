class CreateFriends < ActiveRecord::Migration[6.0]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :date_met
      t.integer :best_friend
      t.timestamps
    end
  end
end
