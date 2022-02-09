class Friend < ApplicationRecord
    has_many :friend_groups
    has_many :groups, through: friend_groups
end