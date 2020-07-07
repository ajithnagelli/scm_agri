import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Alert, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Image, Avatar} from 'react-native-elements';


function ActiveOrder(props) {
    
    var total = 0;

    var len = props.veges.length;
    var element = [];
    
    for (var i = 0; i < len; i++) {
        total += props.prices[i];
        element.push(
            <View key={'view1'+i} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{paddingVertical: 2}} key={'text1'+i}>{props.veges[i]}</Text>
                    <Text style={{paddingVertical: 2}} key={'text2'+i}>{props.quantities[i]}</Text>
                    <Text style={{paddingVertical: 2}} key={'text3'+i}>{props.prices[i]}rs</Text>
            </View>
        )
    }

    return(
        <View style={{marginHorizontal: 30, marginVertical: 10, padding: 10, borderWidth: 2, borderRadius: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Placed on {props.placedOn}</Text>
                <Icon
                    name='truck'
                    size={20}
                    color='black'
                />
                <Text>{props.deliveredBy}</Text>
            </View>

                
            <View style={{marginTop: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Order #{props.orderNo}</Text>
                <View style={{borderBottomWidth: 2, marginVertical: 5}}></View>
                
                {element}
                
            
                <View style={{borderBottomWidth: 2, marginVertical: 5}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name='circle'
                            size={20}
                            color='green'/>
                        <Text style={{fontWeight: 'bold'}}> Active</Text>
                    </View>
                    <Text style={{fontWeight: 'bold'}}>Total</Text>
                    <Text style={{fontWeight: 'bold'}}>{total}rs</Text>
                </View>
            </View>

        </View>
    )
}



export default function TrackOrder(items) {

    return(
        <ScrollView contentContainerStyle={styles.container}>
            
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 30}}>
                    
                    <Icon
                        name='close'
                        size={30}
                        color='red'
                        onPress={()=>items.navigation.navigate('DrawerRender', {screen: 'MyOrders'})}/>
                    
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 30}}>Order #{items.route.params.OrderID}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>{items.route.params.OrderedAtTime} | {items.route.params.TotalItems} items | {items.route.params.Cost}rs</Text>
                    </View>

                    <TouchableOpacity onPress={()=>console.log('order cancelled')}>
                        <Text style={{color: 'red', fontSize: 15}}>Cancel</Text>
                    </TouchableOpacity>

                </View>

                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginHorizontal: 30,
                    marginTop: 10
                }}
                />
            </View>


            <View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Icon 
                        name='location-arrow'
                        size={30}
                        color='green'/>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Farm</Text>
                        <Text>location of farm</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Icon 
                        name='angle-double-down'
                        size={20}
                        color='green'/>
                    <Icon 
                        name='angle-double-down'
                        size={20}
                        color='green'/>
                    <Icon 
                        name='angle-double-down'
                        size={20}
                        color='green'/>
                    
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Icon 
                        name='home'
                        size={30}
                        color='green'/>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Home</Text>
                        <Text>location of Home</Text>
                    </View>
                </View>

                
            </View>

            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 10,
                    marginHorizontal: 30
                }}
                />

            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Icon
                        name='calendar-check-o'
                        size={50}/>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'green'}}>Order Confirmed</Text>
                        <Text>Your order will be delivered shortly.</Text>
                    </View>
                </View>

            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderWidth: 3, padding: 10, marginHorizontal: 30}}>
                
                <Avatar
                    rounded
                    size='large'
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU'}}
                    />

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>DeliveryBoy Name</Text>
                    <Text>Your Delivery Boy</Text>
                </View>

                <Button
                    title='CALL'
                    buttonStyle={{ backgroundColor: 'green'}}
                    onPress={()=>console.log('call')}
                />
            </View>

            <ActiveOrder veges={items.route.params.veges} quantities={items.route.params.quantities} prices={items.route.params.prices} orderNo={items.route.params.OrderID} placedOn={items.route.params.OrderedAtTime} deliveredBy={items.route.params.deliveredBy}/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
    },
  });