import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

// import a from './basic_url'

export default class Signup extends React.Component {
    
    state = {
        iconName1: 'eye',
        iconName2: 'eye',
        pass1: true, 
        pass2: true, 
        name: '',
        phoneNum: null,
        email: '',
        password1: '',
        password2: '',

    };
    
    signUp = async() => {
        console.log("Sign Up")
        await axios({
            method: 'post',
            url: 'http://192.168.43.221:8000/customer/signup/',
            data: {
                email:this.state.email,
                password:this.state.password1,
                retype_password: this.state.password2,
                phone:this.state.phoneNum,
                username:this.state.name,
            }
        }).then((response) => {
            if(response.data.error == undefined){
                console.log("Successfully Registered ", response.data)
                console.log("Token is ", response.data.token)
                AsyncStorage.setItem('userToken', response.data.token)
                this.props.navigation.navigate('WalkThrough')
            }
            else if(Array.isArray(response.data.error)){
                console.log(response.data.error)
                Alert.alert('Error', 'Fill all details', [
                    {text: 'Ok', onPress: ()=> {}}
                ])
            }
            else{
                console.log(response.data.error)
                Alert.alert('Error', response.data.error, [
                    {text: 'Ok', onPress: ()=> {}}
                ])
            }
        }).catch((error) => {
            console.log(error)
        });
    };

    render() {
        const theme = {
            Button: {
              raised: false,
            },
          }


        return(
            <View style={styles.container}>
                
                <View style={{justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 30}}>Welcome!</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 30}}>Create Account</Text>
                </View>

                <View style={{marginHorizontal: 30}}>
                    <Input
                        placeholderTextColor='#555'
                        placeholder='Name'
                        onChangeText={value => {this.setState({name: value})} }
                        leftIcon={
                            <Icon
                            name='user'
                            size={27}
                            color='black'
                            />
                        }
                    />

                    <Input
                        placeholderTextColor='#555'
                        placeholder='Phone Number'
                        onChangeText={value => {this.setState({phoneNum: value})} }
                        leftIcon={
                            <Icon
                            name='phone'
                            size={25}
                            color='black'
                            />
                        }
                    />

                    <Input
                        placeholderTextColor='#555'
                        placeholder='Email Address'
                        onChangeText={value => {this.setState({email: value})} }
                        leftIcon={
                            <Icon
                            name='envelope'
                            size={20}
                            color='black'
                            />
                        }
                    />

                    <Input
                        placeholderTextColor='#555'
                        secureTextEntry={this.state.pass1}
                        placeholder='Password'
                        onChangeText={value => {this.setState({password1: value})} }
                        leftIcon={
                            <Icon
                            name='lock'
                            size={28}
                            color='black'
                            />
                        }
                        rightIcon={
                            <Icon
                            onPress={()=>this.setState(this.state.iconName1 === 'eye' ? {iconName1:'eye-slash', pass1:false} : {iconName1: 'eye', pass1:true})}
                            name={this.state.iconName1}
                            size={20}
                            color='black'
                            />
                        }
                    />

                    <Input
                        placeholderTextColor='#555'
                        secureTextEntry={this.state.pass2}
                        placeholder='Confirm password'
                        onChangeText={value => {this.setState({password2: value})} }
                        leftIcon={
                            <Icon
                            name='lock'
                            size={28}
                            color='black'
                            />
                        }
                        rightIcon={
                            <Icon
                            onPress={()=>this.setState(this.state.iconName2 === 'eye' ? {iconName2:'eye-slash', pass2: false} : {iconName2: 'eye', pass2:true})}
                            name={this.state.iconName2}
                            size={20}
                            color='black'
                            />
                        }
                    />
                </View>
                
                <View>
                    <Button
                        title='Register    '
                        buttonStyle={{paddingHorizontal:70, backgroundColor: '#000', marginHorizontal:30}}
                        icon={
                        <Icon
                            name="check-circle"
                            size={30}
                            color="#fff"
                        />
                        }
                        iconRight
                        onPress={this.signUp}
                        // onPress={()=>console.log(this.state.name + " " + this.state.email + " " + this.state.phoneNum + " " + this.state.password1 + " " + this.state.password2)}
                    />
                </View>
                <Button
                        title='Already Member?    '
                        titleStyle={{color: 'black', fontWeight: 'bold'}}
                        buttonStyle={{paddingHorizontal:70, backgroundColor: '#fff', marginHorizontal:30,  borderWidth: 2, borderColor: 'black', borderRadius: 5}}
                        icon={
                        <Icon
                            name="arrow-right"
                            size={30}
                            color="#000"
                        />
                        }
                        iconRight
                        onPress={()=>{this.props.navigation.navigate('Signin')}}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
    //   backgroundColor: '#a3b721'
    },
  });
  
  