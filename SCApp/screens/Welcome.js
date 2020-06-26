import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import DropDownPicker from 'react-native-dropdown-picker';

export default class App extends React.Component {

    state = {
      language: 'English',
    };
  
    render() {
      return (
          <View style={styles.container}>
            
            <Image style={{marginLeft: 10, height:400, width:400}} source={require('../welcome.png')} />
            
            
            <Text style={{fontSize:25, textAlign: 'center'}}>Please select a language!</Text>
            
            
            <View style={{marginHorizontal: 60}}>
              <DropDownPicker
                  items={[
                      {label: 'English', value: 'English'},
                      {label: 'Hindi', value: 'Hindi'},
                      {label: 'Tamil', value: 'Tamil'},
                      {label: 'Bengali', value: 'Bengali'},
                  ]}
                  defaultValue={this.state.language}
                  containerStyle={{height: 40}}
                  style={{backgroundColor: '#fafafa'}}
                  dropDownStyle={{backgroundColor: '#fafafa', height: 80}}
                  onChangeItem={item => this.setState({
                      language: item.value
                  })}
              />
            </View>
  
            <View style={{marginHorizontal: 60}}>
              <Button
                buttonStyle={{paddingHorizontal:70, backgroundColor: '#000'}}
                icon={
                  <Icon
                    name="arrow-right"
                    size={30}
                    color="#ffffff"
                  />
                }
                iconRight
                onPress={()=>{this.props.navigation.navigate('UserType', {language: this.state.language})}}
              />
            </View>
  
  
          </View>
        );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-evenly'
    },
  
    boxRadius: {
      backgroundColor: '#ffffff',
      borderWidth: 5, 
      borderColor: 'black', 
      borderStyle: 'solid', 
      borderRadius: 15,
      marginTop: 15,
    },
  
    items: {
      fontSize: 20,
      fontWeight: '400',
      lineHeight: 50,
      textAlign: 'center',
      letterSpacing: 10,
    }
  });