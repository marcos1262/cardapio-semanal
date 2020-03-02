import React, { Component } from "react";
import { View, Text, SafeAreaView, FlatList, Dimensions } from "react-native";
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import KeyboardSpacer from 'react-native-keyboard-spacer'

import MealCell from './MealCell/MealCell'
import styles from './MainView.style'

export default function MainView() {
	const FirstRoute = () => (
		<FlatList
		style={styles.list}
		data={[{key: 'coffee'}, {key: 'snack1'}, {key: 'lunch'}, 
		{key: 'snack2'}, {key: 'dinner'}, {key: 'snack3'}]}
		renderItem={ ({item}) => <MealCell type={item.key}/>}
		/>
	);

	const initialLayout = { width: Dimensions.get('window').width };

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'SEG' },
		{ key: 'second', title: 'TER' },
		{ key: 'third', title: 'QUA' },
		{ key: 'fourth', title: 'QUI' },
		{ key: 'fifth', title: 'SEX' },
	]);

	const renderScene = SceneMap({
		first: FirstRoute,
		second: FirstRoute,
		third: FirstRoute,
		fourth: FirstRoute,
		fifth: FirstRoute,
	});

	const renderTabBar = (props) => (
		<TabBar
		{...props}
		indicatorStyle={{ backgroundColor: '#737373' }}
		labelStyle={{ fontWeight: '600' }}
		style={{ backgroundColor: 'none' }}
		inactiveColor='#ffdadd'
		activeColor='#737373'
		/>
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titles}>
				<Text style={styles.titleBack}>CARDÁPIO SEMANAL</Text>
				<Text style={styles.titleFront}>CARDÁPIO SEMANAL</Text>
			</View>
			<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			renderTabBar={renderTabBar}
			/>
			<KeyboardSpacer />
		</SafeAreaView>
	);
}