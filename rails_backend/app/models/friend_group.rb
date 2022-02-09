class FriendGroup < ApplicationRecord
    belongs_to :group
    belongs_to :friend
end
