import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faInbox, faBellSlash, faBell, faList } from '@fortawesome/free-solid-svg-icons';

import { Tab, Button, Title, Add } from './styles';

export default function BottomTabNavigator({ navigation, background, colorTitle, colorIcon }) {
    return (
        <Tab background={background}>
            <Button onPress={() => navigation.navigate("Home")}>
                <FontAwesomeIcon icon={faHome} size={28} color={colorIcon} />
                <Title style={{ color: colorTitle }}>Home</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Rooms")}>
                <FontAwesomeIcon icon={faList} size={28} color={colorIcon} />
                <Title style={{ color: colorTitle }}>All Room</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Home")}>
                <FontAwesomeIcon icon={faBell} size={28} color={colorIcon} />
                <Title style={{ color: colorTitle }}>Room Available</Title>
            </Button>
            <Button onPress={() => navigation.navigate("Home")}>
                <FontAwesomeIcon icon={faBellSlash} size={28} color={colorIcon} />
                <Title style={{ color: colorTitle }}>Room Booked</Title>
            </Button>
        </Tab>
    )
}