class Group < ApplicationRecord
    has_many :friend_groups
    has_many :friends, through: :friend_groups
end
