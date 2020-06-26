import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function UserType({route, navigation}){
    
    const {language} = route.params;
    console.log(JSON.stringify(language));

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Choose User Type</Text>

                <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>navigation.navigate('Signup')}>
                    <Image style={{height:100, width:100}} source={require('../customerRegister.png')}/>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Customer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>navigation.navigate('Signup')}>
                    <Image style={{height:100, width:100}} source={require('../farmerRegister.png')}/>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Farmer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>navigation.navigate('Signup')}>
                    <Image style={{height:100, width:100}} source={require('../deliveryRegister.png')}/>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Delivery Executive</Text>
                </TouchableOpacity>
            </View>

            <Image style={{height:150, width:130}} source={require('../tree.png')} />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
});