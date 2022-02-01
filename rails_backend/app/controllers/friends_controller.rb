class FriendsController < ApplicationController
    def index
      friends = Friend.all
      # more code needed here after setting up Serializer
    end
end