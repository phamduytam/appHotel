import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, ImageBackground, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
import { getAll, deleteById, loadById } from "../../actions/room";
import Dialog, { DialogContent, DialogFooter, DialogButton, } from 'react-native-popup-dialog';

import {
    styles,
    Button,
    Title,
    Price,
    TitleDialog,
    Description
 } from './styles';
import { images } from '../../images';

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: this.props.room,
            visible: false,
            id: 0
        }
    }

    numberFormat = (value) => {
        if (!value) {
            return;
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    componentDidMount() {
        console.log('componentDidMount', this.props);
        this.props.navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            console.log('focus');
            this.getAll();
        });
    }

    getAll = () => {
        this.props.dispatch(getAll()).then();
    }

    openDialog = (id) => {
        this.setState({id: id, visible: true});
    }

    delete = () => {
        this.props.dispatch(deleteById(this.state.id)).then(() => {
            this.setState({id: 0, visible: false});
            this.getAll();
        });
    }

    update = (id) => {
        this.props.dispatch(loadById(id)).then(() => {
            this.props.navigation.navigate('EditRooms');
        });
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps', props, state);
    //     return null;
    // }

    render() {
        const navigation = this.props.navigation;
        console.log('room', this.state, this.props);
        const _this = this;
        return (
            <ImageBackground source={images.bg} resizeMode="cover" style={styles.image}>
                <View style={styles.container}>
                        <ScrollView>
                            { this.props.room &&
                              this.props.room.map((item, index) => {
                                return (
                                <View style={styles.row} key={index}>
                                    <View style={styles.left}>
                                        <Text style={styles.txtColor}>{ item.name }</Text>
                                        <Text style={styles.txtColor}>Price: <Price>{ this.numberFormat(item.price_day)}</Price>/day</Text>
                                        <Text style={styles.txtColor}>Price: <Price>{ this.numberFormat(item.price_hour)}</Price>/hour</Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Button onPress={() => {this.update(item.id)}}>
                                            <Title>Edit</Title>
                                        </Button>
                                        <Button onPress={ () => {this.openDialog(item.id)}}>
                                            <Title>Delete</Title>
                                        </Button>
                                    </View>
                                </View>
                                )
                            })}
                        </ScrollView>
                <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                    this.setState({ visible: false });
                    }}
                    footer={
                        <DialogFooter>
                        <>
                            <DialogButton
                            text='Cancel'
                            onPress={() => {this.setState({ visible: false })}}
                            />
                            <DialogButton
                            text='Delete'
                            onPress={ this.delete }
                            />
                        </>
                        </DialogFooter>
                    }
                >
                    <DialogContent>
                        <View>
                            <TitleDialog>Do you want to delete this room?</TitleDialog>
                            <Description>You cannot undo this action</Description>
                        </View>
                    </DialogContent>
                </Dialog>
                </View>
            </ImageBackground>
        )
    }
};

function mapStateToProps(state) {
    console.log('room mapStateToProps', state);
    if (state.room.room) {
        return {
            room: state.room.room.data
        };
    }
    return {};
}

export default connect(mapStateToProps)(Rooms);