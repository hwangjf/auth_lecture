import React, { Fragment } from 'react'
import SaleList from '../components/SaleList'

class ShopPage extends React.Component {
	state = {
		bots: []
	}

	componentDidMount(){
		fetch("http://localhost:4000/api/v1/bots")
			.then(res => res.json())
			.then(response => {
        debugger
				this.setState({bots: response})
			})
	}

	selectBot = (botID) => {
		fetch(`http://localhost:4000/api/v1/bots/${botID}/purchase`, {
			method: "POST"
		})
			.then(res => res.json())
			.then(response => {
				this.setState(prevState => {
					let newBots = prevState.bots.filter(bot => bot.id !== response.id)
					return {
						bots: newBots
					}
				})
			})
	}
	
	render(){
		const { bots } = this.state
		return (
			<Fragment>
				<SaleList bots={bots} selectBot={this.selectBot}/>
			</Fragment>
		)
	}
}

export default ShopPage
