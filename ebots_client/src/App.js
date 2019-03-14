import React, { Component, Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ShopPage from './containers/ShopPage'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'

class App extends Component {
	render() {
		return (
			<Grid>
				<Navbar />
				<Grid.Row>
					<Switch>
						<Route path="/users/:id" component={Profile} />
						<Route path="/shop" component={ShopPage} />
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
