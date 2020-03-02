import React, { Component } from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        fontSize: 45,
        position: 'absolute',
        color: '#ffdadd'
    },
    titleFront: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        paddingTop: 10,
        color: '#737373'
    }
})