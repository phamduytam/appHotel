import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, ImageBackground, ScrollView, Platform, TouchableOpacity, Image,
        SafeAreaView, TextInput
 } from 'react-native';

 import { update } from '../../../actions/room';
 import { form_edit } from '../../../model/form_edit';

import {
    styles,
    Error
 } from './styles';
import { images } from '../../../images';

class EditRooms extends Component {
    constructor(props) {
        super(props);
        const _form = Object.assign(form_edit, this.props.room);
        this.state = {
            room: _form
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            const _form = Object.assign(form_edit, this.props.room);
            this.setState({
                room: _form
            });
        });
    }

    onChange = (value, name) => {
        let required = false;
        let maxLength = false;
        let isValid = false;
        let isNumber = false;
        if (value === '') {
            required = true;
        } else {
            required = false;
        }
        const length = name === 'name' ? 100 : 10;
        if (value.length > length) {
            maxLength = true;
        } else {
            maxLength = false;
        }

        if (name !== 'name') {
            if (isNaN(value)) {
                isNumber = true;
            } else {
                isNumber = false;
            }
        }

        if (required || maxLength || isNumber) {
            isValid = false;
        } else {
            isValid = true;
        }

        const stateClone = Object.assign({}, this.state);
        stateClone.room.errors.[name]['required'] = required;
        stateClone.room.errors.[name]['maxLength'] = maxLength;
        stateClone.room.errors.[name]['isValid'] = isValid;
        stateClone.room.errors.[name]['isNumber'] = isNumber;
        stateClone.room[name] = value;

        if (stateClone.room.errors.name.isValid && stateClone.room.errors.price_day.isValid
         && stateClone.room.errors.price_hour.isValid) {
            stateClone.room.isSubmit = true;
        } else {
            stateClone.room.isSubmit = false;
        }
        this.setState(stateClone);
    }

    submit = () => {
        const params = {
            name: this.state.room.name,
            price_day: this.state.room.price_day,
            price_hour: this.state.room.price_hour
        }
        this.props.dispatch(update(this.props.room.id, params)).then();
    }

    render() {
        if (!this.state.room) {
            return;
        }
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={images.bg} resizeMode="cover" style={styles.image}>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.txtColor}>Name</Text>
                        </View>
                        <View style={styles.right}>
                            <TextInput style={styles.txtInput} placeholder="Name"
                                placeholderTextColor="grey" value={this.state.room.name} onChangeText={(value) => {this.onChange(value, 'name')}} />
                            { this.state.room.errors && this.state.room.errors.name.required &&
                            <Error>Name is required</Error>
                            }
                            { this.state.room.errors && this.state.room.errors.name.maxLength &&
                            <Error>Max length exceeded</Error>
                            }
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.txtColor}>Price/Day</Text>
                        </View>
                        <View style={styles.right}>
                            <TextInput style={styles.txtInput} placeholder="Price/Day" value={this.state.room.price_day}
                                placeholderTextColor="grey" onChangeText={(value) => {this.onChange(value, 'price_day')}} />
                            { this.state.room.errors && this.state.room.errors.price_day.required &&
                            <Error>Price is required</Error>
                            }
                            { this.state.room.errors && this.state.room.errors.price_day.maxLength &&
                            <Error>Max length exceeded</Error>
                            }
                            { this.state.room.errors && this.state.room.errors.price_day.isNumber &&
                            <Error>Price is number</Error>
                            }
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.txtColor}>Price/Hour</Text>
                        </View>
                        <View style={styles.right}>
                            <TextInput style={styles.txtInput} placeholder="Price/Hour" value={this.state.room.price_hour}
                                placeholderTextColor="grey" onChangeText={(value) => {this.onChange(value, 'price_hour')}} />
                            { this.state.room.errors && this.state.room.errors.price_hour.required &&
                            <Error>Price is required</Error>
                            }
                            { this.state.room.errors && this.state.room.errors.price_hour.maxLength &&
                            <Error>Max length exceeded</Error>
                            }
                            { this.state.room.errors && this.state.room.errors.price_hour.isNumber &&
                            <Error>Price is number</Error>
                            }
                        </View>
                    </View>
                    <View style={styles.row_bt}>
                        <TouchableOpacity style={this.state.room.isSubmit ? styles.btCreate : styles.btCreate_disable}
                         disabled={!this.state.room.isSubmit} onPress={this.submit}>
                            <Text style={styles.btTitle}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
};

function mapStateToProps(state) {
    // console.log('edit state', state)
    if (state.room.room) {
        return {
            room: state.room.room
        };
    }
    return {};
}

export default connect(mapStateToProps)(EditRooms);