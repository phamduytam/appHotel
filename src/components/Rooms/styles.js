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
        justifyContent: "center",
    },

    container: {
        flex: 1,
        backgroundColor: '#4f4f4f',
        width: '100%',
        paddingBottom: 80
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

    row: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0, 0.3)'
    },

    left: {
        flex: 3
    },

    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
});
export const Button = styled.TouchableOpacity`
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b08347;
    border-radius: 5px;
    margin-bottom: 5px;
`;

export const Title = styled.Text`
    color: #fff;
`;

export const Price = styled.Text`
    color: #ff0000;
`;

export const TitleDialog = styled.Text`
    font-weight: bold;
    font-size: 14px;
    padding: 10px 20px;
    text-align: center;
`;

export const Description = styled.Text`
    font-weight: normal;
    text-align: center;
`;
