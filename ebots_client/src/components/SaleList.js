import React from 'react'
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react'

const SaleList = ({ bots, selectBot }) => {

	function renderBots(){
		return bots.map(bot => {
			return (
				<Card key={bot.id} onClick={()=> selectBot(bot.id)}>
					<Card.Content>
						<Image src={bot.image_url} floated='right' size='small'/>
		        <Card.Header>{bot.name}</Card.Header>
		        <Card.Meta>Owner: {bot.owner.username}</Card.Meta>
		        <Card.Description>
							Price: ${bot.price}
		        </Card.Description>
		      </Card.Content>
				</Card>
			)
		})
	}
	return(
		<Card.Group centered>
	      {renderBots()}
	  </Card.Group>
	)
}

export default SaleList