import { GET_REWARDS, GET_RESTAURANTS, ADD_RESTAURANT, UPDATE_RESTAURANT, GET_USERS, 
	ADD_USER, UPDATE_USER } from '../../utils/Constants'

import * as server from '../../utils/Server'

//REWARDS
export const getRewards = rewards => ({
    type: GET_REWARDS,
    rewards
})

//RESTAURANTS
export const getRestaurants = restaurants => ({
    type: GET_RESTAURANTS,
    restaurants
})

export const addRestaurant = restaurant => ({
    type: ADD_RESTAURANT,
    restaurant
})

export const updateRestaurant = restaurant => ({
    type: UPDATE_RESTAURANT,
    restaurant
})

//USERS
export const getUsers = users => ({
    type: GET_USERS,
    users
})

export const addUser = user => ({
    type: ADD_USER,
    user
})

export const updateUser = user => ({
    type: UPDATE_USER,
    user
})

//REWARDS
export const fetchRewards = () => dispatch => 
	server.fetchRewards().then(rewards => dispatch(getRewards(rewards)))

//RESTAURANTS
export const fetchRestaurants = () => dispatch => 
	server.fetchRestaurants().then(restaurants => dispatch(getRestaurants(restaurants)))

export const insertRestaurant = restaurant => dispatch =>
    server.addRestaurant(restaurant).then(restaurant => dispatch(addRestaurant(restaurant)))

export const editRestaurant = restaurant => dispatch =>
	server.updateRestaurant(restaurant).then(restaurant => dispatch(updateRestaurant(restaurant)))

//USERS
export const fetchUsers = () => dispatch => 
server.fetchUsers().then(users => dispatch(getUsers(users)))

export const insertUser = user => dispatch =>
    server.addUser(user).then(user => dispatch(addUser(user)))

export const editUser = user => dispatch =>
	server.updateUser(user).then(user => dispatch(updateUser(user)))