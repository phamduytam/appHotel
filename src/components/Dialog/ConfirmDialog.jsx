import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Dialog, { DialogContent, DialogFooter, DialogButton, } from 'react-native-popup-dialog';

import {
    styles,
    Title,
    Description
 } from './styles';

class ConfirmDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
        console.log('props', this.props)
    }

    render() {
        return (
            <Dialog
                visible={this.state.visible}
                onTouchOutside={() => {
                this.setState({ visible: false });
                }}
                footer={
                    <DialogFooter>
                        <DialogButton
                        text={this.props.config.btCancel}
                        onPress={() => {}}
                        />
                        <DialogButton
                        text={this.props.config.btOk}
                        onPress={() => {}}
                        />
                    </DialogFooter>
                }
            >
                <DialogContent style={styles.dialog}>
                    <View>
                        <Title>{ this.props.config.title }</Title>
                        <Description>{ this.props.config.description }</Description>
                    </View>
                </DialogContent>
            </Dialog>
        );
    }
}
export default ConfirmDialog;
