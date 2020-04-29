import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Form } from 'native-base';
import { getArticles } from '../service/news';
import DataItem from '../components/dataItem';

export default class ListThumbnailExample extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		isLoading: true,
	// 		data: null
	// 	}
	// }

	state = {
		isLoading: false,
		data: null,
	}

	// componentDidMount() {
	// 	getArticles().then(
	// 		data => {
	// 			this.setState({
	// 				isLoading: false,
	// 				data: data
	// 			})
	// 		}, error => {
	// 			Alert.alert('Error', 'Something went wrong')
	// 		}
	// 	)
	// }


	async componentDidMount() {
		const articles = await getArticles();
		this.setState({
			isLoading: false,
			data: articles,
		});
		console.log("------------------------------------------------------")
		console.log(articles)
	}

	render() {
		// console.log(this.state);
		if (this.state.data) console.log(this.state.data);

		let view = this.state.isLoading ? (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
				<Text style={{ marginTop: 10 }} children="Please Wait.." />
			</View>
		) : (
				<List
					dataArray={this.state.data}
					renderRow={(item) => {
						return (
							<DataItem onPress={this.handleItemDataOnPress} data={item} />
						)
					}} />
			)


		return (
			<Container>
				<Content>
					{view}
				</Content>
			</Container>
		);
	}
}