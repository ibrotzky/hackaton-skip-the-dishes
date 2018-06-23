import React, { Component, Text } from 'react'
import User from '../components/User'

class UserList extends Component {

	componentDidMount = () => {
		this.props.fetchUsers()
	}

	render() {
		const { users } = this.props

		return(
			<div>
			{users && users.length > 0 ?
				(
					users.map( user => (
						<div key={user.id}>
							<User 
								id = {user.id}
								userName = {user.username}
							/>
						</div>
					))
				) :
				(
				<div>
					<span></span>
				</div>
				)
			}
			</div>
		)
	}
}

export default UserList