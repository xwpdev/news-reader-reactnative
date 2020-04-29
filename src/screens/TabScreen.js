import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title  } from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';


export default class TabsExample extends Component {
	
	render() {
		return (
			<Container>
				{/* <Header>
          <Left/>
          <Body>
            <Title>News APP</Title>
          </Body>
          <Right />
        </Header> */}

				<Tabs>
					<Tab heading="Genaral">
						<Tab1 />
					</Tab>
					<Tab heading="Business">
						<Tab2 />
					</Tab>
					<Tab heading="Tech">
						<Tab3 />
					</Tab>
				</Tabs>

			</Container>
		);
	}
}