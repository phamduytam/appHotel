import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, ImageBackground, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton, } from 'react-native-popup-dialog';

import { getBooked, update } from "../../actions/room";

import {
    styles,
    Button,
    Title,
    Price,
    TitleDialog,
    Description
 } from './styles';
import { images } from '../../images';

class RoomsBooked extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: [],
            visible: false,
            total: 0
        }
    }

    componentDidMount() {
        console.log('test');
        this.props.navigation.addListener('focus', () => {
            this.getBooked();
        });
    }

    getBooked = () => {
        this.props.dispatch(getBooked()).then();
    }

    static getDerivedStateFromProps(props, state) {
        // console.log('getDerivedStateFromProps', props, state);
        return {
            room: props.room
        }
    }

    numberFormat = (value) => {
        if (!value) {
            return;
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    update = (id, index) => {
        const params = {
            booked: 0,
            price: null,
            type: 3 // 2 is BOOKED
        }
        let total = 0;
        if (+this.state.room[index].booked === 0) {
            total = this.state.room[index].price;
        } else {
            const timeBegin = new Date(this.state.room[index].updated_at);
            const timeEnd = new Date();
            const _MIN = 1000 * 60;
            const time = Math.floor((timeEnd - timeBegin) / _MIN);
            if (time <= 60) {
                total = this.state.room[index].price;
            } else {
                const hour = Math.floor(time / 60);
                total = parseInt(this.state.room[index].price) + parseInt(hour * 20000);
            }
        }

        this.props.dispatch(update(id, params)).then(() => {
            this.getBooked();
            this.setState({visible: true, total: total});
        });
    }

    closeDialog = () => {
        this.setState({ visible: false, total: 0 });
    }

    render() {
        if (!this.props.room) {
            return null;
        }
        console.log('room booked', this.state, this.props);
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
                                    <Text style={styles.cb_text}>Hiện trạng: thuê theo {+item.booked === 0 ? 'ngày' : 'giờ'}</Text>
                                </View>
                                <View style={styles.checkboxgroup}>
                                    <Text style={styles.txtColor}>Giá tiền: <Price>{ this.numberFormat(item.price)}</Price></Text>
                                </View>
                            </View>
                            <View style={styles.right}>
                                <Button onPress={() => {this.update(item.id, index)}}>
                                    <Title>Thanh toán</Title>
                                </Button>
                            </View>
                        </View>
                        )
                    })}
                    </ScrollView>
                    <Dialog
                        visible={this.state.visible}
                        footer={
                            <DialogFooter>
                            <>
                                <DialogButton
                                text='OK'
                                onPress={ this.closeDialog }
                                />
                            </>
                            </DialogFooter>
                        }
                    >
                        <DialogContent>
                            <View>
                                <TitleDialog>Thành tiền</TitleDialog>
                                <Description >
                                    <Text>Số tiền cần phải thanh toán là:
                                        <Price> { this.numberFormat(this.state.total) } </Price>
                                    </Text>
                                    <Text>(Chưa bao gồm nước uống)</Text>
                                </Description>
                            </View>
                        </DialogContent>
                    </Dialog>
                </View>
            </ImageBackground>
        )
    }
};

function mapStateToProps(state) {
    console.log('booked', state);
    if (state.room.room) {
        return {
            room: state.room.room.data
        };
    }
    return {};
}

export default connect(mapStateToProps)(RoomsBooked);