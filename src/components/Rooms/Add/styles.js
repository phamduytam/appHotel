import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: '100%',
        marginTop: 50
    },

    image: {
        flex: 1
    },

    container: {
        flex: 1,
        backgroundColor: '#4f4f4f',
        height: '100%',
        width: '100%',
        top: 0
    },

    header: {
        flex: 1
    },

    row: {
        flexDirection: 'row',
        padding: 10,
        height: 60
    },

    row_bt: {
        flexDirection: 'row',
        padding: 10,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    left: {
        flex: 1
    },

    right: {
        flex: 3
    },

    body: {
        // backgroundColor: '#439c5a',
        flex: 1,
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10
    },

    bg1: {
        // backgroundColor: 'red'
    },

    txtInput : {
        height: 40,
        padding: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, .7)',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        color: '#fff'
    },

    btCreate: {
        height: 45,
        marginTop: 20,
        backgroundColor: '#b08347',
        alignItems: "center",
        alignSelf: 'center',
        padding: 10,
        width: '50%',
        justifyContent: 'center',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5
    },

    btCreate_disable: {
        height: 45,
        marginTop: 20,
        backgroundColor: '#b08347',
        alignItems: "center",
        alignSelf: 'center',
        padding: 10,
        width: '50%',
        justifyContent: 'center',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        opacity: 0.5
    },

    btTitle: {
        color: '#ffffff',
        fontWeight: 'bold'
    },

    txtColor: {
        color: 'rgba(255, 255, 255, .7)'
    }
});

export const Error = styled.Text`
   color: red;
   font-size: 10px;
`;

