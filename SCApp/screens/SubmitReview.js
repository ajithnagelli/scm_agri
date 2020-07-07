import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Alert, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Image} from 'react-native-elements';

export default function SubmitReview() {

    const [color1, setcolor1] = useState('grey');
    const [color2, setcolor2] = useState('grey');
    const [color3, setcolor3] = useState('grey');
    const [color4, setcolor4] = useState('grey');
    const [color5, setcolor5] = useState('grey');
    const [rating, setrating] = useState(0);
    const [comments, setcomments] = useState('');

    const review = (stars) => { 

        switch (stars) {
            case 1:
              setcolor1('green');
              setcolor2('grey');
              setcolor3('grey');
              setcolor4('grey');
              setcolor5('grey');
              setrating(1);
              break;
            case 2:
                setcolor1('green');
              setcolor2('green');
              setcolor3('grey');
              setcolor4('grey');
              setcolor5('grey');
              setrating(2);
              break;
            case 3:
                setcolor1('green');
              setcolor2('green');
              setcolor3('green');
              setcolor4('grey');
              setcolor5('grey');
              setrating(3);
              break;
            case 4:
                setcolor1('green');
              setcolor2('green');
              setcolor3('green');
              setcolor4('green');
              setcolor5('grey');
              setrating(4);
              break;
            case 5:
                setcolor1('green');
              setcolor2('green');
              setcolor3('green');
              setcolor4('green');
              setcolor5('green');
              setrating(5);
              break;
          }

    };



    return(
        <ScrollView contentContainerStyle={styles.container}>
            
            <View style={{marginHorizontal: 30}}>
                <Image source={require('../welcome.png')} style={{height: 300, marginBottom: -70}} />
                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'green'}}>Thanks for Ordering!</Text>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>The order was delivered as you wished.</Text>
            </View>
            
            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginHorizontal: 30,
            }}
            />

            <View style={{marginHorizontal: 30}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: 'green'}}>Rate your delivery!</Text>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='star' size={40} color={color1} onPress={()=>review(1)} style={{paddingHorizontal
                    : 2}}/>
                    <Icon name='star' size={40} color={color2} onPress={()=>review(2)} style={{paddingHorizontal
                    : 2}}/>
                    <Icon name='star' size={40} color={color3} onPress={()=>review(3)} style={{paddingHorizontal
                    : 2}}/>
                    <Icon name='star' size={40} color={color4} onPress={()=>review(4)} style={{paddingHorizontal
                    : 2}}/>
                    <Icon name='star' size={40} color={color5} onPress={()=>review(5)} style={{paddingHorizontal
                    : 2}}/>
                </View>
            </View>

            <View style={{marginHorizontal: 30}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: 'green'}}>Share your feedback.</Text>
                <Input
                    
                    onChangeText={(text)=>setcomments(text)}
                    inputContainerStyle={{marginTop: -40, marginHorizontal: -7}} 
                    numberOfLines={5} 
                    placeholderTextColor='black' 
                    placeholder='Tell us what you liked!'/>
                <Button
                    title='Submit'
                    buttonStyle={{ backgroundColor: 'green'}}
                    onPress={()=>console.log(comments)}
                />
            </View>

            

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
    },
  });