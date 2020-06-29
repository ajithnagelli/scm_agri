import React, {useEffect} from 'react'
import {BackHandler, Alert } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import ActiveOrders from './ActiveOrders';
import PastOrders from './PastOrders';
const Tab = createBottomTabNavigator();

export default function MyOrders(params) {

  useEffect(() => {
    const backAction = () => {
        null;
        params.navigation.navigate('VegCardView');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ActiveOrders') {
            iconName = 'cart-plus';
          } else if (route.name === 'PastOrders') {
            iconName = 'user';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="ActiveOrders" component={ActiveOrders} />
        <Tab.Screen name="PastOrders" component={PastOrders} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}