//homepage-screen

import React, {useState} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import { Card, Button, Header, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

import DropDownPicker from 'react-native-dropdown-picker';

function Mybutton(props) {
    return(
        <View style={{backgroundColor:'white'}}>
        <Button
            icon={<Icon
                name={props.name}
                size={20}
                color='#000'/>}
                title={props.name.toUpperCase()}
                titleStyle={{color:'black', paddingLeft: 3}}
                buttonStyle={{backgroundColor:'white'}}
        />
        </View>
    )
}

function Myicon() {
    var [cartItem, setCartItem] = useState(0);
    return(
    <View>
        <Badge 
            value={cartItem}
            containerStyle={{ position: 'absolute', top: -4, right: -4, zIndex: 1 }} />
        <Icon 
        name='shopping-cart'
        size={30}
        onPress={()=>console.log('cart')}/>
        
    </View>
    )
}

function MyView() {

    const [quantity, setQuantity] = useState(250);
    return(
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
            <Card image={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8TFRT+/v4AAACXl5eSkpKcnJzU1NTFxcUSFBOgoKDQ0NAJCQlJSUkUFBRNTU1XV1e0trXIyMjAwMCrq6s6OjpsbGwPDw93eHeytLP4+PgZGxqKjIva2tpSUlKkpKRgHB6DAAACfUlEQVR4nO3dAU/iMByG8dpuk03gbqCH4u34/t/SkruImrSTlO7tds8TTQgL0B//qRkqM4aIiIiIZpa1xqrXcIuCCLuUYnb12m5UZIZpe0cpHYNbrOnrqp53fv19TF9VXdP4D01dl/jQ3fkuqibss144+y9FU1cjwn64FzYk5W//aEZneB/bi8tvZ+qw0M5e6H8WrBAiLDuECMsPIcLyQ/hVqD5K+GZpwqN6+eOlzdAMT5vC+5W4lz64ddEd3I8Uob/Bg7srue12vXDhHUKECPUhvFbYtipJqAXNsL308eoFCbeXPl19W6ErpGxCd+pOnb7Ts8skbF3whtPWuzafUH0seM4Ls81QC3u/8JJRWMbfovgZtggDIUQ4UQgRItSHECFCfQgRItSHECFCfQgRItQXF1733wgINSFEiFAfQoQI9SFEiFAfQoQI9WUU/r0LeVlniHCSECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqO8l+r76CxFuEQaaiTB+9geECBFOEUKECPUhRIhQH0KECPUhRBh/n6gSyjnDjydaDJyHcYJ6d8j3eulx5MHznsby35PYu9fF76WH10zC/X6/2kdbTdDud65X9T2xkC5LurGwxBAiRKgPIUKE+hCOCO1ZuC465zZJQmOGzc+y+/OcNsNpDmnTsp8vXznD0WP6AvqivfI7TfkzTBTOLoQIyw8hwvJDiLD8viccJlxRhqJC/xRUjXmc4pcP2dqdzlMKAm1s62yqu/A2a+q6qmdeFZ2h3XVd0825k//cFX/MR0RERET/X2+0UNfUUmM5FgAAAABJRU5ErkJggg=='}} >
                
            <DropDownPicker
                    items={[
                        {label: '250 gms', value: 250},
                        {label: '500 gms', value: 500},
                        {label: '750 gms', value: 750},
                        {label: '1 kg', value: 1000},
                        {label: '2 kg', value: 2000},
                        {label: '5 kg', value: 5000},
                    ]}
                    defaultValue={quantity}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    dropDownStyle={{backgroundColor: '#fafafa', height: 80}}
                    onChangeItem={item => setQuantity(item.value)}
                />
                
                <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
                    Vegetable Name
                </Text>
                <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
                    Vegetable Price
                </Text>

                

                <Button
                    buttonStyle={{backgroundColor: 'white', borderWidth: 2, borderColor: 'black', borderRadius: 20}}
                    titleStyle={{color: 'black'}}
                    iconRight
                    icon=
                    {<Icon
                        name="plus-circle"
                        size={17}
                        color='black'/>}
                    title='ORDER    ' />
            </Card>
        </View>
    )
}

export default function VegCardView(props)  {
    return(
        <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: 'white'}}>
            <Header
                style={{zIndex:1, borderBottomWidth: 2, borderBottomColor: 'black'}}
                backgroundColor='white'
                leftComponent={{icon: 'menu', size: 30, color: '#000', onPress: ()=>props.navigation.toggleDrawer()}}
                rightComponent={<Myicon/>}
                centerComponent={{text:'TAAZA DUKAAN', style: {letterSpacing: 5, fontWeight: 'bold'}}}
            />
            <Header
                rightComponent={<Mybutton name='sort'/>}
                leftComponent={<Mybutton name='filter'/>}
                backgroundColor= 'white'
            />

            <View style={{flexDirection: 'row', zIndex:-1}}>
                <MyView/>
                <MyView/>
            </View>

            <View style={{flexDirection: 'row', zIndex:-1}}>
                <MyView/>
                <MyView/>
            </View>

            <View style={{flexDirection: 'row', zIndex:-1}}>
                <MyView/>
                <MyView/>
            </View>

            <View style={{flexDirection: 'row', zIndex:-1}}>
                <MyView/>
                <MyView/>
            </View>

            <View style={{flexDirection: 'row', zIndex:-1}}>
                <MyView/>
                <MyView/>
            </View>

            <View style={{flexDirection: 'row', zIndex:-1}}>
                <MyView/>
                <MyView/>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    item: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });