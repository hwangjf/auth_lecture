import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ShopPage from './containers/ShopPage'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

class App extends Component {

	state = {
		currentUser: null
	}

	componentDidMount() {
		const jwt = localStorage.getItem('jwt')

		if (jwt){
			fetch("http://localhost:3001/api/v1/auto_login", {
				headers: {
					"Authorization": jwt
				}
			})
				.then(res => res.json())
				.then((response) => {
					if (response.errors) {
						alert(response.errors)
					} else {
						this.setState({currentUser: response})
					}
				})
		}
	}

	// we need to set the current user and the token
	setCurrentUser = (response) => {
		// localStorage.setItem("token", response.jwt)
		this.setState({
			currentUser: response
		})
	}

	// this is just so all of our data is as up to date as possible now that we are
	// just keep state at the top level of our application in order to correctly update
	// we must have the state be updated properly
	updateUser = (user) => {
		this.setState({
			currentUser: user
		})
	}

	// we need to reset state and remove the current user and remove the token
	logout = () => {
		// localStorage.removeItem("token")
		this.setState({
			currentUser: null
		}, () => { this.props.history.push("/login") })
	}
	
	render() {
		console.log(this.state.currentUser)
		return (
			<Grid>
				<Navbar history={this.props.history} logout={this.logout} currentUser={this.state.currentUser} />
				<Grid.Row centered>
					<Switch>
						<Route path="/users/:id" render={routerProps => <Profile currentUser={this.state.currentUser} {...routerProps} />} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/login" render={routerProps => <LoginForm {...routerProps} setCurrentUser={this.setCurrentUser} />} />
						<Route path="/signup" component={SignupForm} />
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
