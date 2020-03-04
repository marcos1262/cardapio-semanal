import React, { Component } from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    AndroidSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    titles: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    titleBack: {
        fontFamily: 'PlaylistScript',
        fontSize: 43,
        position: 'absolute',
        zIndex: -1,
        color: '#ffdadd'
    },
    titleFront: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        paddingTop: 10,
        color: '#737373'
    }
})