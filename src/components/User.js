import React, { Component } from 'react'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'
import '../css/User.css'

/**
 * Responsible component for show the user in header.
 */
class User extends Component {
	render() {
		const { id, userName } = this.props

		return(
			<div key={id}>
				<h2>{userName}</h2>
			</div>
		)
	}
}

const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps, actions)(User)