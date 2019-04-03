import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class LoginForm extends React.Component {
	state = {
		username: "",
		password: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = () => {
    fetch("http://localhost:4000/api/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(response => {
				if (response.errors){
					alert(response.errors)
				} else {
					this.props.history.push(`/users/${response.user.data.id}`)
				}
			})
	}

	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <label>Username</label>
					<input 
						onChange={this.handleChange} 
						name="username" 
						value={this.state.username} 
						placeholder='Username' 
					/>
		    </Form.Field>
		    <Form.Field>
		      <label>Password</label>
					<input 
						onChange={this.handleChange} 
						type="password" 
						name="password" 
						value={this.state.password} 
						placeholder='Password' 
					/>
		    </Form.Field>
		    <Button type='submit'>Submit</Button>
		  </Form>
		)
	}
}

export default LoginForm