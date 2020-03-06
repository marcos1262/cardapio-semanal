import React, { Component } from "react";
import { View, Text, SafeAreaView, FlatList, Dimensions } from "react-native";
import { TabBar, TabView } from 'react-native-tab-view';
import KeyboardSpacer from 'react-native-keyboard-spacer'

import MealCell from './MealCell/MealCell'
import styles from './MainView.style'

export default class MainView extends Component {
	constructor(props) {
		super(props);

		const days = ['seg','ter','qua','qui','sex','seg'];
		const todayIndex = (new Date()).getDay() - 1;
		if (todayIndex > 4) todayIndex = 0;

		this.state = {
			index: todayIndex,
			routes: [
				{ key: 'seg', title: 'SEG' },
				{ key: 'ter', title: 'TER' },
				{ key: 'qua', title: 'QUA' },
				{ key: 'qui', title: 'QUI' },
				{ key: 'sex', title: 'SEX' },
			]
		};

		const DayScene = (day) => {
			const data = [
				{key: 'coffee'}, {key: 'snack1'}, {key: 'lunch'}, 
				{key: 'snack2'}, {key: 'dinner'}, {key: 'snack3'}
			];
			return (<FlatList
				style={styles.list}
				data={data}
				renderItem={ ({item}) => <MealCell day={day} type={item.key}/>}
			/>)
		}

		this.renderScene = ({ route }) => {
			return DayScene(route.key)
		};

		this.initialLayout = { width: Dimensions.get('window').width };

		this.renderTabBar = (props) => (
			<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: '#737373' }}
			labelStyle={{ fontWeight: '600' }}
			style={{ backgroundColor: 'none' }}
			inactiveColor='#ffdadd'
			activeColor='#737373'
			/>
		);
	}

	handleIndexChange = index => {
		this.setState({ index });
	}

	render() {
		return (
			<SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
				<View style={styles.titles}>
					<Text style={styles.titleBack}>CARDÁPIO SEMANAL</Text>
					<Text style={styles.titleFront}>CARDÁPIO SEMANAL</Text>
				</View>
				<TabView
				navigationState={this.state}
				renderScene={this.renderScene}
				onIndexChange={this.handleIndexChange}
				initialLayout={this.initialLayout}
				renderTabBar={this.renderTabBar}
				/>
				<KeyboardSpacer />
			</SafeAreaView>
		);
	}
}