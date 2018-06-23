import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'

class NewUser extends Component {

	state = {
        username:'',
        mail: ''
    }

    onInputChange = e => {
        const target = e.target
        const value = target.value
		const name = target.name

        this.setState({
            [name]: value
        })
    }

    onSubmit = e => {
		const { username, mail } = this.state

        e.preventDefault()
        if(username === '' || mail === null) {
            return
		}
		
        const user = {
			username: username,
			mail: mail
		}
		
		console.log('user:', user)
		this.props.insertUser(user)
		
		this.setState({ 
            username:'',
            mail: ''
		})

		this.props.history.push('/')
    }

	render() {
		return (
			<div>
				<Form className="addpost-form" onSubmit={this.onSubmit}>
					<Form.Input
						required
						name="username"
						value={this.state.userName}
						onChange={this.onInputChange}
						label="Name:"
						placeholder="insert your name"
					/>

					<Form.Input
						required
						name="mail"
						value={this.state.userMail}
						onChange={this.onInputChange}
						label="E-mail:"
						placeholder="insert your e-mail"
					/>
					<Form.Button name="submitButton" color="teal" compact size="large">
                        Awesome
					</Form.Button>
				</Form>
			</div>
		)
	}
}

const mapStateToProps = ({ users }) => ({
    users
})

export default connect(mapStateToProps, actions)(NewUser)