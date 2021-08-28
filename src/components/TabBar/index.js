import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faInbox, faBellSlash, faBell, faList, faUser } from '@fortawesome/free-solid-svg-icons';

import { Tab, Button, Title, Add } from './styles';

export default function TabBar({ state, descriptors, navigation }) {

    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    const icons = {
        'faHome': faHome,
        'faList': faList,
        'faBell': faBell,
        'faBellSlash': faBellSlash,
        faUser
    };

    const tabs = state.routes.filter(item => {
        if (item && item.params && item.params.isTab) {
          return item;
        }
    });
  return (

    <Tab background={'#010101'}>
      {tabs.map((route, index) => {

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === route.params.index;

        const icon = icons[options.icon];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Button
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key = {index}
          >
            <FontAwesomeIcon icon={icon} size={24} color={isFocused ? '#fff' : '#b08347'} />
            <Title style={{ color: isFocused ? '#fff' : '#b08347' }}>{label}</Title>
          </Button>
        );
      })}
    </Tab>
  );
}