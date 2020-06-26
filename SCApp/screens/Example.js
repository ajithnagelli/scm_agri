//just example of drawer


import React from "react";
import { Text, View, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

export default class Example extends React.Component {
    state = {
        country: 'uk'
    };
render() {
    return(
        <View style={styles.container}>
        <DropDownPicker
            
            items={[
                {label: 'UK', value: 'uk'},
                {label: 'France', value: 'france'},
            ]}
            defaultValue={this.state.country}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => this.setState({
                country: item.value
            })}
        />
        </View>
    )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
  });