import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, ImageBackground, ScrollView, TextInput,
 Platform, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'react-native-check-box';

import { getAvailable, update } from "../../actions/room";

import {
    styles,
    Button,
    Title,
    Price,
    TitleDialog,
    Description
 } from './styles';
import { images } from '../../images';

class RoomsAvailable extends Component {
    constructor(props) {
        super(props);
        // this.getAvailable();
        console.log('RoomsAvailable', this.props);
        this.state = {
            room: [],
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
        console.log('test');
        this.props.navigation.addListener('focus', () => {
            this.getAvailable();
        });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state);
        return {
            room: props.room
        }
    }

    update = (id, index) => {
        let price;
        price = this.state.room[index].price;
        if (!price) {
            price = this.state.room[index].price_day;
        }
        const params = {
            booked: this.state.room[index].booked,
            price: price,
            type: 2 // 2 is BOOKED
        }
        this.props.dispatch(update(id, params)).then(() => {
            this.getAvailable();
        });
    }

    changeType = (index, value) => {
        let price;
        const stateClone = Object.assign({}, this.state);
        stateClone['room'][index]['booked'] = value;
        if (+value === 0) {
            price = this.state.room[index].price_day;
        } else {
            price = this.state.room[index].price_hour;
        }
        stateClone['room'][index]['price'] = price;
        this.setState(stateClone);
    }

    getAvailable = () => {
        this.props.dispatch(getAvailable()).then();
    }

    changePrice = (index, value) => {
        const stateClone = Object.assign({}, this.state);
        stateClone['room'][index]['price'] = value;
        this.setState(stateClone);
    }

    render() {
        if (!this.props.room) {
            return null;
        }

        // this.setState({room: this.props.room});
        console.log('room available', this.state, this.props);
        return (
            <ImageBackground source={images.bg} resizeMode="cover" style={styles.image}>
                <View style={styles.container}>
                    <ScrollView>
                        { this.state.room.map((item, index) => {
                            return (
                            <View style={styles.row} key={index}>
                                <View style={styles.left}>
                                    <Text style={styles.roomName}>{ item.name }</Text>
                                    <View style={styles.checkboxgroup}>
                                        <Text style={styles.cb_text}>Cho thuê theo: </Text>
                                        {/* FOR MOBIE */}
                                        <CheckBox
                                            isChecked={+item.booked === 0 ? true : false }
                                            onClick={() => { this.changeType(index, 0) }}
                                        />
                                        <Text style={styles.label}>Ngày</Text>
                                        <CheckBox
                                            isChecked={+item.booked === 1 ? true : false}
                                            onClick={() => { this.changeType(index, 1) }}
                                        />
                                        <Text style={styles.label}>Giờ</Text>
                                        {/* FOR WEB CODE */}
                                        {/* <CheckBox
                                            value={+item.booked === 0 ? true : false }
                                            onValueChange={() => { this.changeType(index, 0) }}
                                        />
                                        <Text style={styles.label}>Ngày</Text>
                                        <CheckBox
                                            value={+item.booked === 1 ? true : false}
                                            onValueChange={() => { this.changeType(index, 1) }}
                                        />
                                        <Text style={styles.label}>Giờ</Text> */}
                                    </View>
                                    <View style={styles.checkboxgroup}>
                                        <Text style={styles.txtColor}>Giá tiền:</Text>
                                        <TextInput style={styles.txtInput}
                                            value={item.price !== null ? item.price : item.price_day}
                                            onChangeText={(value) => {this.changePrice(index, value)}}
                                        />
                                    </View>
                                </View>
                                <View style={styles.right}>
                                    <Button onPress={() => {this.update(item.id, index)}}>
                                        <Title>Cho thuê</Title>
                                    </Button>
                                </View>
                            </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
};

function mapStateToProps(state) {
    console.log('available', state);
    if (state.room.room) {
        return {
            room: state.room.room.data
        };
    }
    return {};
}

export default connect(mapStateToProps)(RoomsAvailable);