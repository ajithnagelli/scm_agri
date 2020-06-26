import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';




export default class ForgotPass extends React.Component {

    state = {
        email: '',
    };

    render() {

        const theme = {
            Button: {
              raised: false,
            },
          }

        return(

            <View style={styles.container}>

                <View>
                    <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 30}}>Welcome!</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 30}}>Add Email Here To Get Link.</Text>
                </View>

                
                

                <View style={{marginHorizontal: 30}}>
                    
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

                </View>
                
                <View>
                    <Button
                        title='Reset Password    '
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
                        onPress={()=>{console.log(this.state.email)}}
                    />
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
    },
  });
  
  