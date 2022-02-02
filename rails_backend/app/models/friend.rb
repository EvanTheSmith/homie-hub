class Friend < ApplicationRecord
    has_many :friendgroups
    has_many :groups, through: friendgroups
end