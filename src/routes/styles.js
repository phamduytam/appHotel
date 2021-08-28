import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    btLogout : {
        backgroundColor: '#fff',
        color: '#b08347'
    }
});

export const Button = styled.TouchableOpacity`
    background-color: #fff;
    color: #b08347;
    height: 30px;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;
`;

export const ButtonBack = styled.TouchableOpacity`
    height: 30px;
    display: flex;
    flex-direction: column;
    margin-left: 5px;
`;

export const Title = styled.Text`
    color: #b08347;
`;

export const HeaderTitle = styled.Text`
    color: #fff;
`;



