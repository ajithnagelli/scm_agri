import React from 'react'
import {View, Text, Button} from 'react-native'
import getDirections from 'react-native-google-maps-directions'
 
export default class MyMap extends React.Component {
 
  handleGetDirections = () => {
    const data = {
       source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit"
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453
        },
           {
          latitude: -33.8600036,
          longitude: 18.697493
        }
      ]
    }
 
    getDirections(data)
  }
 
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}