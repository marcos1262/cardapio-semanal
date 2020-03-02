import React, { Component, useState } from "react";
import { StatusBar } from 'react-native';
import MainView from "./MainView/MainView";

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
	return Font.loadAsync({
		'PlaylistScript': require('./Resource/Font/PlaylistScript.otf'),
		'Montserrat-Regular': require('./Resource/Font/Montserrat-Regular.ttf'),
		'Montserrat-Bold': require('./Resource/Font/Montserrat-Bold.ttf'),
	});
};

export default function App() {
	StatusBar.setBarStyle('dark-content', true);

	const [dataLoaded, setDataLoaded] = useState(false);
	if(!dataLoaded)
		return (
			<AppLoading
			startAsync={fetchFonts}
			onFinish={() => setDataLoaded(true)}
			/>
		)
	
	return (
		<MainView/>
	)
}