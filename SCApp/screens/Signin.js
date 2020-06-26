import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';




export default class Signin extends React.Component {

    state = {
        iconName1: 'eye',
        pass1: true,
        email: '',
        password: '',
    };

    render() {
        return(
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 30}}>Welcome back!</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 30, borderBottomColor: 'black', borderBottomWidth: 2}}>Login</Text>
                    </View>
                </View>

                <View style={{marginHorizontal: 30}}>
                    <Input
                        placeholderTextColor='#555'
                        placeholder='Email Address/Phone Number'
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
                        onChangeText={value => {this.setState({password: value})} }
                        leftIcon={
                            <Icon
                            name='lock'
                            size={30}
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

                </View>
                
                <View>
                    <Button
                        title='Login    '
                        buttonStyle={{paddingHorizontal:70, backgroundColor: '#000', marginHorizontal:30}}
                        style={{width:100}}
                        icon={
                        <Icon
                            name="check-circle"
                            size={30}
                            color="#fff"
                        />
                        }
                        iconRight
                        onPress={()=>{console.log(this.state.email + " " + this.state.password)}}
                    />

                    <TouchableOpacity style={{marginHorizontal: 30, alignSelf: 'flex-end', marginTop: 30 }} onPress={()=>this.props.navigation.navigate('ForgotPass')}>
                        <Text style={{fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: 'black'}}>Forgot Password?</Text>
                    </TouchableOpacity>

                </View>


                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}}>
                    
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}>
                        <Text style={{fontWeight: 'bold', borderWidth: 2, borderColor: 'black', borderRadius: 5, fontSize: 20, paddingHorizontal: 10, paddingVertical: 5}}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SigninOTPSocial')}>
                        <Text style={{fontWeight: 'bold', borderWidth: 2, borderColor: 'black', borderRadius: 5, fontSize: 20, paddingHorizontal: 10, paddingVertical: 5}}>OTP Login</Text>
                    </TouchableOpacity>

                </View>
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
  
  