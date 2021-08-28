import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet,
Dimensions, Platform, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { logout } from "../../actions/auth";

import {
    styles
 } from './styles';

import { images } from '../../images';

class Account extends Component {
    constructor(props) {
        super(props);
        console.log('Account', this.state, this.props);
    }

    clearStorage = () => {
        this.props.dispatch(logout());
    }

    render() {
        const navigation = this.props.navigation;
        return (
                <ImageBackground source={images.bg} resizeMode="cover" style={styles.image}>
                    <View style={styles.container}>
                            <ScrollView style={{ paddingHorizontal: 15 }}>
                                <Text>Hello</Text>
                            </ScrollView>
                    </View>
                 </ImageBackground>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        message: state.message
    };
}

export default connect(mapStateToProps)(Account);