import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Redirect } from 'react-router-dom';
import { login } from "../../actions/auth";
import { View, Text, TextInput, Button, FlatList, StyleSheet,
 Dimensions, Platform, TouchableOpacity, Image, ImageBackground } from 'react-native';

import AuthService from '../../services/auth.service';
import { images } from '../../images';
import Dialog, { DialogContent, DialogFooter, DialogButton, } from 'react-native-popup-dialog';

import {
    styles,
    Title,
    Description
 } from './styles';
class Login extends Component {
    constructor(props) {
        super(props);
        console.log('login props', this.props);
        this.state = {
            email: '',
            password: '',
            visible: false
        }
    }

    onChangeEmail = (value) => {
        this.setState({email: value});
    }

    onChangePassword = (value) => {
        this.setState({password: value});
    }

    goToHome = () => {
        this.props.dispatch(login(this.state.email, this.state.password))
        .then((data) => {
            // this.props.navigation.navigate('Home');
        })
        .catch(() => {
            // if (Platform.OS !== 'web') {
            //     Toast.show(
            //         this.props.message.message,
            //         {
            //             duration: Toast.durations.SHORT,
            //             position: Toast.positions.CENTER,
            //             shadow: true,
            //             animation: true
            //         }
            //     );
            // }
            this.setState({visible: true});
        });
    }

    render() {
        return (
            <ImageBackground source={images.bg} resizeMode="cover" style={styles.image}>
                <View style={styles.container}>
                        <View style={styles.header}>
                            <Image source={images.logo} style={styles.logo} />
                        </View>
                        <View style={styles.body}>
                            <TextInput style={styles.txtInput} placeholder="Email"
                                placeholderTextColor="#b08347" onChangeText={this.onChangeEmail} />
                            <TextInput style={styles.txtInput} placeholder="Password"
                                placeholderTextColor="#b08347" secureTextEntry={true} onChangeText={this.onChangePassword} />
                            <TouchableOpacity title="Login" style={styles.btLogin} onPress={this.goToHome}>
                                <Text style={styles.btTitle}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <Dialog
                            visible={this.state.visible}
                            footer={
                                <DialogFooter style={{ marginTop: 0 }}>
                                    <>
                                    <DialogButton
                                        text='OK'
                                        onPress={() => {this.setState({ visible: false })}}
                                    />
                                    </>
                                </DialogFooter>
                            }
                            onTouchOutside={() => {
                            this.setState({ visible: false });
                            }}

                        >
                            <DialogContent>
                                <View>
                                    <Title>Login Error</Title>
                                    <Description>Please input corrent email and password</Description>
                                </View>
                            </DialogContent>
                        </Dialog>
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

export default connect(mapStateToProps)(Login);