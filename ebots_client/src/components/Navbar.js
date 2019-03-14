import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
	render(){
		return (
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu>
						<Link className="item" to="/shop">
							Shop
						</Link>
					</Menu>
				</Grid.Column>
			</Grid.Row>
		)
	}
}

export default Navbar