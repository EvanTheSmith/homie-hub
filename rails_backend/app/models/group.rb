class Group < ApplicationRecord
    has_many :friendgroups
    has_many :friends, through: friendgroups
end