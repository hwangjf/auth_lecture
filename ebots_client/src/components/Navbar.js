import React from 'react'
import { Grid, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {

	logout = () => {
		this.props.logout()
		localStorage.removeItem('userId')
	}

	render(){
		return (
			<Grid.Row>
				<Grid.Column width={16}>
				<Menu>
					<Link className="item" to="/shop">
						Shop
					</Link>
						{this.props.currentUser 
							?
								<Menu.Menu position="right">
									<Menu.Item onClick={()=>this.props.history.push(`/users/${this.props.currentUser.id}`)} >
										<Image src={this.props.currentUser.avatar_url} avatar />
										<p>$ {this.props.currentUser.balance}</p>
									</Menu.Item>
									<Link className="item" to="/login" onClick={this.logout} >
										Logout
									</Link>
								</Menu.Menu>
							:
								<Menu.Menu position="right">
									<Link className="item" to="/login">
										Login
									</Link>
									<Link className="item" to="/signup">
										Sign Up
									</Link>
								</Menu.Menu>
						}
					</Menu>
				</Grid.Column>
			</Grid.Row>
		)
	}
}

export default Navbar