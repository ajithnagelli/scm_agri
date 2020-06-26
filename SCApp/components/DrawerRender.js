//drawer with homepage

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Signin from '../screens/Signin';
import VegCardView from '../components/VegCardView'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

function DrawerImage() {
  return(
    <View style={styles.container}>
      <View>
        <Avatar
          rounded
          size='xlarge'
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU'}}
          />
        <Text style={{fontWeight: 'bold', alignSelf: 'center', marginTop: 10, fontSize: 20}}>User Name</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start'}}
          name="list"
          size={20}
          color="#000"
        />
        <Text style={{flex: 1, flexDirection: 'row', alignSelf: 'center',fontWeight: 'bold', textAlign: 'center'}}>My Orders</Text>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}
          name="angle-right"
          size={20}
          color="#000"
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start'}}
          name="dollar"
          size={20}
          color="#000"
        />
        <Text style={{flex: 1, flexDirection: 'row', alignSelf: 'center',fontWeight: 'bold', textAlign: 'center'}}>Wallet</Text>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}
          name="angle-right"
          size={20}
          color="#000"
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start'}}
          name="shopping-cart"
          size={20}
          color="#000"
        />
        <Text style={{flex: 1, flexDirection: 'row', alignSelf: 'center',fontWeight: 'bold', textAlign: 'center'}}>My Cart</Text>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}
          name="angle-right"
          size={20}
          color="#000"
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start'}}
          name="envelope"
          size={20}
          color="#000"
        />
        <Text style={{flex: 1, flexDirection: 'row', alignSelf: 'center',fontWeight: 'bold', textAlign: 'center'}}>Notifications</Text>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}
          name="angle-right"
          size={20}
          color="#000"
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start'}}
          name="info-circle"
          size={20}
          color="#000"
        />
        <Text style={{flex: 1, flexDirection: 'row', alignSelf: 'center',fontWeight: 'bold', textAlign: 'center'}}>About Us</Text>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}
          name="angle-right"
          size={20}
          color="#000"
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start'}}
          name="star"
          size={20}
          color="#000"
        />
        <Text style={{flex: 1, flexDirection: 'row', alignSelf: 'center',fontWeight: 'bold', textAlign: 'center'}}>Rate Us</Text>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}
          name="angle-right"
          size={20}
          color="#000"
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start'}}
          name="share-alt-square"
          size={25}
          color="#000"
        />
        <Text style={{flex: 1, flexDirection: 'row', alignSelf: 'center',fontWeight: 'bold', textAlign: 'center'}}>Share</Text>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}
          name="angle-right"
          size={20}
          color="#000"
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start'}}
          name="headphones"
          size={20}
          color="#000"
        />
        <Text style={{flex: 1, flexDirection: 'row', alignSelf: 'center',fontWeight: 'bold', textAlign: 'center'}}>Customer Support</Text>
        <Icon
          style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', textAlign: 'right'}}
          name="angle-right"
          size={20}
          color="#000"
        />
      </View>
    </View>
  )
}
function DrawerRender() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={()=><DrawerImage/>} initialRouteName="VegCardView">
        
        <Drawer.Screen name="VegCardView" component={VegCardView} />
        <Drawer.Screen name="Signin" component={Signin} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerRender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  //   backgroundColor: '#a3b721'
  },
});