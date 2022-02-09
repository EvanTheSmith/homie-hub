class CreateFriendGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :friend_groups do |t|
      t.integer :friend_id
      t.integer :group_id
      t.timestamps
    end
  end
end
