import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import { Badge, Button } from 'react-native-elements';
import ViewPager from '@react-native-community/viewpager';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class WalkThrough extends React.Component {
    render() {
        return (
            <MyPager navigation={this.props.navigation}/>
        )
    }
}

const MyPager = (props) => {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>

      <View style={styles.viewPager} key="1">
        <Image style={{width: windowWidth , height: windowHeight/2}} source={require('../wt1.png')}/>
        <Text style={{fontWeight: 'bold'}}>Fast and Secure Delivery</Text>
        <View style={{alignItems: 'center'}}>
          <Text>We deliver pure happiness,</Text>
          <Text>The only worth waiting for is</Text>
          <Text>Grocery Delivery Boy</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Badge value="" status="error" />
          <Badge value="" status="success" />
          <Badge value="" status="success" />
        </View>
        <Button
          title='Skip'
          onPress={()=>props.navigation.navigate('DrawerRender')}
          iconRight
          buttonStyle={{backgroundColor: 'white', borderWidth: 2, borderColor: 'black', borderRadius: 20}}
          titleStyle={{color:'black', paddingRight: 5}}
          icon={<Icon
                name='arrow-right'
                size={20} 
                />}
          />
      </View>

      <View style={styles.viewPager} key="2">
        <Image style={{width: windowWidth, height: windowHeight/2}} source={require('../wt2.png')}/>
        <Text style={{fontWeight: 'bold'}}>Farm to Home Delivery</Text>
        <View style={{alignItems: 'center'}}>
          <Text>We deliver groceries directly</Text>
          <Text>From Farmer</Text>
          <Text>Frozen and Free</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Badge value="" status="success" />
          <Badge value="" status="error" />
          <Badge value="" status="success" />
        </View>
        <Button
            title='Skip'
            onPress={()=>props.navigation.navigate('DrawerRender')}
            iconRight
            buttonStyle={{backgroundColor: 'white', borderWidth: 2, borderColor: 'black', borderRadius: 20}}
            titleStyle={{color:'black', paddingRight: 5}}
            icon={<Icon
                  name='arrow-right'
                  size={20} 
                  />}
            />
      </View>
      
      <View style={styles.viewPager} key="3">
        <Image style={{width: windowWidth, height: windowHeight/2}} source={require('../wt3.png')}/>
        <Text style={{fontWeight: 'bold'}}>Lucky Day!</Text>
        <View style={{alignItems: 'center'}}>
          <Text>It's happening.</Text>
          <Text>So you can fight it, accept it, or find a way</Text>
          <Text>to enjoy it.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Badge value="" status="success" />
          <Badge value="" status="success" />
          <Badge value="" status="error" />
        </View>
        <Button
            title="Let's Start"
            onPress={()=>props.navigation.navigate('DrawerRender')}
            iconRight
            buttonStyle={{backgroundColor: 'white', borderWidth: 2, borderColor: 'black', borderRadius: 20}}
            titleStyle={{color:'black', paddingRight: 5}}
            icon={<Icon
                  name='check'
                  size={20} 
                  />}
            />
      </View>

    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});