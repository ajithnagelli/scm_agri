import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';


export default function EnterOTP({route, navigation}) {

    const [otp, setOtp] = useState();

    const {email} = route.params;

    const input1 = React.createRef();
    const input2 = React.createRef();
    const input3 = React.createRef();
    const input4 = React.createRef();

        return(

            <View style={styles.container}>

                <View>
                    <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 30}}>Confirm OTP!</Text>
                </View>

                
                <View>
                    <View style={{marginLeft: 30, marginBottom: 30}}>
                        <Icon name="commenting" size={80} color="#000" />
                    </View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 30}}>Enter OTP sent to email,</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 30}}>{email}</Text>
                </View>

                <View style={{marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    
                    <View style={{width: 50}}>
                        <Input
                            ref={input1}
                            maxLength={1}
                            keyboardType="number-pad"
                            inputStyle={{textAlign: 'center'}}
                            placeholder='7'
                            onChangeText={value => input2.current.focus()}
                        />
                    </View>
                    <View style={{width: 50}}>
                        <Input
                            ref={input2}
                            maxLength={1}
                            keyboardType="number-pad"
                            inputStyle={{textAlign: 'center'}}
                            placeholder='7'
                            onChangeText={value => input3.current.focus()}
                        />
                    </View>
                    <View style={{width: 50}}>
                        <Input
                            ref={input3}
                            maxLength={1}
                            keyboardType="number-pad"
                            inputStyle={{textAlign: 'center'}}
                            placeholder='7'
                            onChangeText={value => input4.current.focus()}
                        />
                    </View>
                    <View style={{width: 50}}>
                        <Input
                            ref={input4}
                            maxLength={1}
                            keyboardType="number-pad"
                            inputStyle={{textAlign: 'center'}}
                            placeholder='7'
                        />
                    </View>

                </View>
                
                <View>
                    <Button
                        title='Verify and Continue    '
                        buttonStyle={{paddingHorizontal:70, backgroundColor: '#000', marginHorizontal:30}}
                        style={{width:100}}
                        icon={
                        <Icon
                            name="arrow-right"
                            size={30}
                            color="#fff"
                        />
                        }
                        iconRight
                        onPress={()=>{console.log('button clicked')}}
                    />
                </View>
            </View>
        )
    // }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
    },
  });