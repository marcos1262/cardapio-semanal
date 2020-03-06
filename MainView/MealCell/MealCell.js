import React, { Component } from "react";
import { View, Image, TextInput, AsyncStorage } from "react-native";

import styles from './MealCell.style'
import Images from '../../Resource/Image/'

export default class MealCell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        };
        this.storeKey = this.props.day + '_' + this.props.type
    }

    componentDidMount() {
        AsyncStorage.getItem(this.storeKey).then((value) => {
            this.setState({input: value});
        });
    }

    handleChangeInput = (text) =>  {
        this.setState({input: text});
        AsyncStorage.setItem(this.storeKey, text);
    }

    render() {
        var image = Images.icons.snack;
        switch(this.props.type) {
            case 'coffee': image = Images.icons.coffee; break;
            case 'lunch': image = Images.icons.lunch; break;
            case 'dinner': image = Images.icons.dinner; break;
        }

        return (
            <View style={styles.container}>
                <Image
                style={styles.img}
                source={image}
                />
                <TextInput
                style={styles.input}
                placeholder='Digite aqui uma refeição'
                onChangeText={this.handleChangeInput}
                value={this.state.input}
                />
            </View>
        )
    }
}