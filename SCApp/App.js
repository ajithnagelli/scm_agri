import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import UserType from './screens/UserType';
import Welcome from './screens/Welcome';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Example from './screens/Example';
import SigninOTPSocial from './screens/SigninOTPSocial';
import Tp from './screens/Tp';
import WalkThrough from './screens/WalkThrough';
import VegCardView from './components/VegCardView';
import DrawerRender from './components/DrawerRender';
import ForgotPass from './screens/ForgotPass';
import EnterOTP from './screens/EnterOTP';


const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      headerMode="none"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="UserType"
        component={UserType}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
      />
      <Stack.Screen
        name="SigninOTPSocial"
        component={SigninOTPSocial}
      />
      <Stack.Screen
        name="Tp"
        component={Tp}
      />
      <Stack.Screen
        name="WalkThrough"
        component={WalkThrough}
      />
      <Stack.Screen
        name="VegCardView"
        component={VegCardView}
      />
      <Stack.Screen
        name="DrawerRender"
        component={DrawerRender}
      />
      <Stack.Screen
        name="Example"
        component={Example}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
      />
      <Stack.Screen
        name="EnterOTP"
        component={EnterOTP}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}