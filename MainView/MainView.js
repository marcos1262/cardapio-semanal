import React, { Component } from "react";
import { View, Text, SafeAreaView, FlatList, Dimensions } from "react-native";
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import KeyboardSpacer from 'react-native-keyboard-spacer'

import MealCell from './MealCell/MealCell'
import styles from './MainView.style'

export default function MainView() {
	const DayScene = (day) => (
		<FlatList
		style={styles.list}
		data={[{key: 'coffee'}, {key: 'snack1'}, {key: 'lunch'}, 
		{key: 'snack2'}, {key: 'dinner'}, {key: 'snack3'}]}
		renderItem={ ({item}) => <MealCell day={day} type={item.key}/>}
		/>
	);

	const initialLayout = { width: Dimensions.get('window').width };

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'seg', title: 'SEG' },
		{ key: 'ter', title: 'TER' },
		{ key: 'qua', title: 'QUA' },
		{ key: 'qui', title: 'QUI' },
		{ key: 'sex', title: 'SEX' },
	]);

	const renderScene = ({ route }) => {
		return DayScene(route.key)
	};

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
		<SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
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