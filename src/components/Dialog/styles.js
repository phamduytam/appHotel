import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from "react-native";
const _width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    dialog: {
    }
});

export const Title = styled.Text`
    font-weight: bold;
    font-size: 14px;
    padding: 10px 20px;
    text-align: center;
`;

export const Description = styled.Text`
    font-weight: normal;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;