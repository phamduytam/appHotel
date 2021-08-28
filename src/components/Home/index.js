import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet,
Dimensions, Platform, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { logout } from "../../actions/auth";

import BottomTabNavigator from '../BottomTabNavigator';

import {
    styles
 } from './styles';

import { images } from '../../images';

class Home extends Component {
    constructor(props) {
        super(props);
        console.log('home', this.state, this.props);
    }

    clearStorage = () => {
        this.props.dispatch(logout());
    }

    render() {
        const navigation = this.props.navigation;
        return (

                    <View style={styles.container}>
                <ImageBackground source={images.bg} resizeMode="cover" style={styles.image}>
                            <ScrollView style={{ paddingHorizontal: 15 }}>
                                <Text>Hello</Text>
                            </ScrollView>
                 </ImageBackground>
                    </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        message: state.message
    };
}

export default connect(mapStateToProps)(Home);