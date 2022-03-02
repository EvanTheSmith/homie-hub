const homieReducer = (state = { user_id: 1, friends: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING': // Action for Loading Operations
        return {
          ...state,
          loading: true
        }

    /* CODE TO BE ADDED LATER ////////////////////
      case 'ADD_FRIENDS':
        return {
          ...state,
          friends: action.friends,
          loading: false
        }
      case 'ADD_ONE_FRIEND':
        return {
          ...state,
          friends: [action.friend, ...state.friends]
        }
      case 'DELETE_FRIEND':
        return {
          ...state,
          friends: state.friends.filter(friend => friend.id !== action.friend_id)
        } 

    */

      default:
        return state;
    }
  }
   
  export default homieReducer;