import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import Home from '../components/Home';
import Login from '../components/Login';
import Rooms from '../components/Rooms';
import RoomsAvailable from '../components/RoomsAvailable';
import RoomsBooked from '../components/RoomsBooked';

import AddRooms from '../components/Rooms/Add';
import EditRooms from '../components/Rooms/Edit';

import { storageService } from '../services/storage.service';
import { restore } from "../actions/auth";

import TabBar from '../components/TabBar';

import { logout } from "../actions/auth";

import { styles, Button, Title, HeaderTitle, ButtonBack } from './styles';

class Routes extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.props.dispatch(restore());
    }

    componentDidMount() {
    }

    doLogout = () => {
        this.props.dispatch(logout());
    }

    render() {
        // console.log('route render', this.state, this.props, styles);
        return (
            <NavigationContainer>

                {
                    this.props.auth.isLoggedIn ? (
                    <Tab.Navigator tabBar={props => <TabBar {...props} />} >
                    <>
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        initialParams={{ isTab: true, index: 0 }}
                        options={{
                            // header: () => null,
                            title: 'Trang chủ',
                            headerStyle: {
                                backgroundColor: '#b08347'
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            icon: 'faHome',
                            headerTitle: () => <HeaderTitle>Home</HeaderTitle>,

                        }} />
                    <Tab.Screen
                    name="RoomsAvailable"
                    component={RoomsAvailable}
                    initialParams={{ isTab: true, index: 1 }}
                    options={{
                        // header: () => null,
                        title: 'Phòng trống',
                        headerStyle: {
                            backgroundColor: '#b08347'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        icon: 'faBell',
                        headerTitle: () => <HeaderTitle>Rooms Available</HeaderTitle>,
                    }} />
                    <Tab.Screen
                    name="RoomsBooked"
                    component={RoomsBooked}
                    initialParams={{ isTab: true, index: 2 }}
                    options={{
                        // header: () => null,
                        title: 'Phòng đã đặt',
                        headerStyle: {
                            backgroundColor: '#b08347'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        icon: 'faBellSlash',
                        headerTitle: () => <HeaderTitle>Rooms Booked</HeaderTitle>,
                    }} />
                    <Tab.Screen
                    name="AllRooms"
                    component={Rooms}
                    initialParams={{ isTab: true, index: 3 }}
                    options={ ({ navigation, route }) => ({
                        // header: () => null,
                        title: "Tất cả phòng",
                        headerStyle: {
                            backgroundColor: '#b08347'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        icon: 'faList',
                        headerTitle: () => <HeaderTitle>All Rooms</HeaderTitle>,
                        headerRight: () => (
                            <Button
                                onPress={() => { navigation.navigate('AddRooms')}}
                                style={styles.btLogout}
                            >
                                <Title>Add</Title>
                            </Button>
                        ),
                    })} />
                    <Tab.Screen
                    name="Account"
                    component={RoomsBooked}
                    initialParams={{ isTab: true, index: 4 }}
                    options={{
                        // header: () => null,
                        title: 'Tài khoản',
                        headerStyle: {
                            backgroundColor: '#b08347'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        icon: 'faUser',
                        headerTitle: () => <HeaderTitle>Account</HeaderTitle>,
                        headerRight: () => (
                            <Button
                                onPress={this.doLogout}
                                style={styles.btLogout}
                            >
                                <Title>Logout</Title>
                            </Button>
                        ),
                    }} />

                    <Tab.Screen
                    name="AddRooms"
                    component={AddRooms}
                    initialParams={{ isTab: false, index: 1 }}
                    options={({ navigation, route }) => ({
                        // header: () => null,
                        headerStyle: {
                            backgroundColor: '#b08347'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        icon: 'faUser',
                        headerTitle: () => <HeaderTitle>Add Rooms</HeaderTitle>,
                        tabBarVisible: false,
                        headerLeft: () => (
                            <ButtonBack
                                onPress={() => { navigation.navigate('AllRooms')}}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} size={26} color={'#fff'} />
                            </ButtonBack>
                        ),
                    })} />

                    <Tab.Screen
                    name="EditRooms"
                    component={EditRooms}
                    initialParams={{ isTab: false, index: 1 }}
                    options={({ navigation, route }) => ({
                        // header: () => null,
                        headerStyle: {
                            backgroundColor: '#b08347'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        headerTitle: () => <HeaderTitle>Edit Rooms</HeaderTitle>,
                        tabBarVisible: false,
                        headerLeft: () => (
                            <ButtonBack
                                onPress={() => { navigation.navigate('AllRooms')}}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} size={26} color={'#fff'} />
                            </ButtonBack>
                        ),
                    })} />
                    </>
                    </Tab.Navigator>
                     ) : (
                    <Stack.Navigator>
                    <>
                    <Tab.Screen
                        name="Login"
                        component={Login}
                        options={{
                            header: () => null,
                        }} />
                    </>
                    </Stack.Navigator>
                     )
                }

            </NavigationContainer>
        )
    }
}

function mapStateToProps(state) {
    console.log('route mapStateToProps', state);
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Routes);