import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { Button, Avatar, Badge } from 'react-native-elements';

import Menu, {
    MenuProvider,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers,
  } from 'react-native-popup-menu';

import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const { SlideInMenu } = renderers;


export default function ProfileActions() {

    const [Email, setEmail] = useState(null);
    const [PhoneNumber, setPhoneNumber] = useState(null);
    const [Password, setPassword] = useState(null);
    const [Latitude, setLatitude] = useState(null);
    const [Longitude, setLongitude] = useState(null);

    return(
        <MenuProvider>
        <View style={styles.container}>
            <TouchableOpacity>
                <Avatar
                rounded
                size='xlarge'
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU'}}
                />
                <Badge
                    status="success"
                    value=""
                    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                />
                <Text style={{fontWeight: 'bold', alignSelf: 'center', marginTop: 10, fontSize: 20}}>User Name</Text>
            </TouchableOpacity>


            {/* pop up menu */}
            <Menu name="personalInfo" renderer={SlideInMenu}>
              <MenuTrigger style={{borderWidth: 2, padding: 10}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Change Personal Information</Text>
              </MenuTrigger>

              <MenuOptions>

                    <Text style={{alignSelf: 'center', marginTop: 30, fontWeight: 'bold'}}>Keep the field unchanged if update is not required.</Text>
            
                    <TextInput
                     onChangeText={data=>{setPhoneNumber(data)}}
                     style={{alignSelf: 'center', height: 50, borderBottomWidth: 2, borderBottomColor: 'black', marginBottom: 10}}
                     placeholder="Phone Number"></TextInput>
                
            
                    <TextInput
                     onChangeText={data=>{setEmail(data)}}
                     style={{alignSelf: 'center', height: 50, borderBottomWidth: 2, borderBottomColor: 'black', marginBottom: 10}}
                     placeholder="Email"></TextInput>
                
            
                    <TextInput
                     onChangeText={data=>{setPassword(data)}}
                     style={{alignSelf: 'center', height: 50, borderBottomWidth: 2, borderBottomColor: 'black', marginBottom: 10}}
                     placeholder="Password"></TextInput>
                
            
                    <Button
                    onPress={()=>{console.log(Email + " " + PhoneNumber + " " + Password)}}
                    buttonStyle={{width: 300, backgroundColor: 'black', alignSelf: 'center', marginBottom: 10}} 
                    title="Update"/>
                
              </MenuOptions>
            </Menu>

            {/* menu for location */}
            <Menu name="location" renderer={SlideInMenu}>
              <MenuTrigger style={{borderWidth: 2, padding: 10}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Update User Location</Text>
              </MenuTrigger>

              <MenuOptions>

              <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 20}}>Update Location</Text>

                    <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-evenly', marginTop: 30}}>
                    <TextInput
                     onChangeText={data=>{setLatitude(data)}}
                     style={{alignSelf: 'center', height: 50, borderBottomWidth: 2, borderBottomColor: 'black', marginBottom: 10}}
                     placeholder="Latitude"></TextInput>
                
            
                    <TextInput
                     onChangeText={data=>{setLongitude(data)}}
                     style={{alignSelf: 'center', height: 50, borderBottomWidth: 2, borderBottomColor: 'black', marginBottom: 10}}
                     placeholder="Longitude"></TextInput>
                    </View>
                    
                    <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 15, marginVertical: 30}}>Or</Text>

                    <Button
                    onPress={()=>{console.log(Latitude + " " + Longitude)}}
                    buttonStyle={{width: 300, backgroundColor: 'black', alignSelf: 'center', marginVertical: 10}} 
                    title="Detect Automatically"/>
                
              </MenuOptions>
            </Menu>

            <TouchableOpacity 
                onPress={console.log('policy')}
                style={{borderWidth: 2, padding: 10, flexDirection: 'row'}}>
              <Icon 
                name='info-circle'
                size={30}/>
              <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={console.log('logout')}
                style={{borderWidth: 2, padding: 10, flexDirection: 'row'}}>
                <Icon 
                    name='sign-out'
                    size={30}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>Logout</Text>
            </TouchableOpacity>

        </View>
        </MenuProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
  });