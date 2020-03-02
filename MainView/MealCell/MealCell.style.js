import React, { Component } from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    img: {
        height: 50,
        width: 50,
        tintColor: '#737373'
    },
    input: {
        height: 70,
        fontSize: 16,
        padding: 10,
        flex: 1,
        textAlign: 'center',
        color: '#737373'
    }
})