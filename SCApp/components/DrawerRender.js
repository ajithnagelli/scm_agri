//drawer with homepage

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import VegCardView from '../components/VegCardView'
import ProfileActions from '../components/ProfileActions'
import MyMap from '../components/MyMap'
import MyOrders from '../screens/MyOrders';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const Drawer = createDrawerNavigator();

function MyDrawer(params) {
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>params.navigation.navigate('DrawerRender', {screen: 'ProfileActions'})}>
        <Avatar
          rounded
          size='xlarge'
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU'}}
          />
        <Text style={{fontWeight: 'bold', alignSelf: 'center', marginTop: 10, fontSize: 20}}>User Name</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>params.navigation.navigate('DrawerRender', {screen: 'MyOrders', params: {navigation: params.navigation}})}
      style={{flexDirection: 'row', alignItems: 'flex-end', marginHorizontal: 10, borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 15}}>
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
      </TouchableOpacity>
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
function DrawerRender({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={()=><MyDrawer navigation={navigation}/>} initialRouteName="VegCardView">
        
        <Drawer.Screen name="VegCardView" component={VegCardView} />
        <Drawer.Screen name="ProfileActions" component={ProfileActions} />
        <Drawer.Screen name="MyMap" component={MyMap} />
        <Drawer.Screen name="MyOrders" component={MyOrders} />
        
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