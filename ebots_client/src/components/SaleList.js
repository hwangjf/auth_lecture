import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const SaleList = ({ bots, selectBot }) => {

	function renderBots(){
    return bots.map(bot => {
			return (
				<Card key={bot.attributes.id}>
					<Card.Content>
						<Image src={bot.attributes.image_url} floated='right' size='small'/>
		        <Card.Header>{bot.attributes.name}</Card.Header>
		        <Card.Meta>Owner: {bot.attributes.owner.username}</Card.Meta>
		        <Card.Description>
							<p>Price: ${bot.attributes.price}</p>
							<Button color="green" onClick={()=> selectBot(bot.attributes.id)}>Buy {bot.name}!</Button>
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