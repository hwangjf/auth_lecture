import React from 'react'
import { Loader, Grid, Segment, Image } from 'semantic-ui-react'
import UserBots from "../components/UserBots"

class Profile extends React.Component {
	state = {
		user: null
	}
	componentDidMount(){
		const userId = this.props.match.params.id
		fetch(`http://localhost:3001/api/v1/users/${userId}`)
		.then(res => res.json())
		.then(response => {
			this.setState({user: response})
		})
	}

	toggleSale = (botID) => {
		fetch(`http://localhost:3001/api/v1/bots/${botID}/toggle_sale`,{
			method: "PATCH"
		})
		.then(res => res.json())
		.then(response => {
			this.setState((prevState) => {
				let target = prevState.user.bots.find(bot => bot.id === response.id)
				let copy = [...prevState.user.bots]

				let index = copy.indexOf(target)

				copy[index] = response

				return {
					user: {...prevState.user, bots: copy}
				}
			})
		})
	}

	render(){
		const { user } = this.state

		if(user){
			return (
				<Grid columns={2} centered>
					<Grid.Column width={3}>
						<Segment>
							<Image src={user.avatar_url} fluid />
							<strong>{user.username}</strong><br/>
							<strong>{user.name}</strong>
							<p>Balance: ${user.balance}</p>
							<p>{user.bio}</p>
						</Segment>
					</Grid.Column>
					<Grid.Column width={9}>
						<Segment>
							<UserBots bots={user.bots} toggleSale={this.toggleSale}/>
						</Segment>
					</Grid.Column>
				</Grid>
			)
		} else {
			return <Loader />
		}
	}
}

export default Profile