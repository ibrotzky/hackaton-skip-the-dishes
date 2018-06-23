import { combineReducers } from 'redux'
import { GET_REWARDS, GET_RESTAURANTS, ADD_RESTAURANT, UPDATE_RESTAURANT, GET_USERS, 
	ADD_USER, UPDATE_USER } from '../../utils/Constants'

function users(state = {}, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                ...action.user
            }
        
        case UPDATE_USER:
            return { 
                ...state, 
                ...action.user 
            }

        case GET_USERS:
            return { 
                ...state,
                ...action.users
            }

        default: return state
    }
}

function rewards(state = {}, action) {
    switch (action.type) {
        case GET_REWARDS:
            return {
                ...state,
                ...action.rewards
			}
		
        default: return state
    }
}

function restaurants(state = {}, action) {
    switch (action.type) {
        case ADD_RESTAURANT:
            return {
                ...state,
                ...action.restaurant
            }
        
        case UPDATE_RESTAURANT:
            return { 
                ...state, 
                ...action.restaurant 
            }

        case GET_RESTAURANTS:
            return { 
                ...state,
                ...action.restaurants
            }

        default: return state
    }
}

export default combineReducers({
    users,
    rewards,
    restaurants
})