import React, { Component } from 'react'
import User from '../components/User'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

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
					<span>There are no users to show</span>
				</div>
				)
			}
			</div>
		)
	}
}


const mapStateToProps = ({ users }) => ({
	users      
})

export default connect(mapStateToProps, actions)(UserList)