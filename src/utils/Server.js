import { SERVER_URI, SERVER_HEADERS } from './Constants'

//REWARDS
export const fetchRewards = () =>
	fetch(`${SERVER_URI}/api/rewards`, {SERVER_HEADERS}).then(rewards => rewards.json())

//RESTAURANTS
export const fetchRestaurants = () =>
	fetch(`${SERVER_URI}/api/restaurants`, {SERVER_HEADERS}).then(restaurants => restaurants.json())

export const addRestaurant = restaurant => {
	fetch(`${SERVER_URI}/api/restaurants`, 
		{method: "POST", 
			headers: {
				...SERVER_HEADERS,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(restaurant)
		}
	).then(data => data.json())
}

export const updateRestaurant = restaurant => {
	return fetch(`${SERVER_URI}/api/restaurants`, {
		method: "PUT", headers: {
				...SERVER_HEADERS,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(restaurant)
		}
	).then(data => data.json())
}

//USERS
export const fetchUsers = () =>
	fetch(`${SERVER_URI}/api/users`, {SERVER_HEADERS}).then(users => users.json())

export const addUser = user =>
	fetch(`${SERVER_URI}/api/users`, 
		{method: "POST", 
			headers: {
      	...SERVER_HEADERS,
      	"Content-Type": "application/json"
    	},
    	body: JSON.stringify(user)
		}
	).then(data => data.json())

export const updateUser = user => {
	return fetch(`${SERVER_URI}/api/users`, {
		method: "PUT", headers: {
				...SERVER_HEADERS,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		}
	).then(data => data.json())
}