import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: '100%',
        marginTop: 50
    },

    image: {
        flex: 1,
        justifyContent: "center"
    },

    container: {
        flex: 1,
        backgroundColor: '#4f4f4f',
        height: '100%',
        width: '100%',
        justifyContent: "center"
    },

    header: {
        flex: 1
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
        backgroundColor: 'white',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        borderTopStartRadius: 5,
        borderTopEndRadius: 5
    },

    btLogin: {
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

    btTitle: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
});

