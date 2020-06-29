import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function PastOrder(props) {

    var len = props.veges.length;
    var element = [];
    var total = 0;
    for (var i = 0; i < len; i++) {
        total += props.prices[i];
        element.push(
            <View key={'v1'+i} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{paddingVertical: 2}} key={'t1'+i}>{props.veges[i]}</Text>
                    <Text style={{paddingVertical: 2}} key={'t2'+i}>{props.quantities[i]}</Text>
                    <Text style={{paddingVertical: 2}} key={'t3'+i}>{props.prices[i]}rs</Text>
            </View>
        )
    }

    return(
        <View style={{marginHorizontal: 30, marginVertical: 10, padding: 10, borderWidth: 2, borderRadius: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Placed on {props.placedOn}</Text>
                <Icon
                    name='truck'
                    size={20}
                    color='black'
                />
                <Text>{props.deliveredBy}</Text>
            </View>

                
            <View style={{marginTop: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Order #{props.orderNo}</Text>
                <View style={{borderBottomWidth: 2, marginVertical: 5}}></View>
                
                {element}
                
            
                <View style={{borderBottomWidth: 2, marginVertical: 5}}></View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Icon
                        name='check-circle'
                        size={20}
                        color='green'/>
                    <Text style={{fontWeight: 'bold'}}> Delivered</Text>
                    </View>
                    <Text style={{fontWeight: 'bold'}}>Total</Text>
                    <Text style={{fontWeight: 'bold'}}>{total}rs</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
                <Button 
                    title='Check Status'
                    buttonStyle= {{backgroundColor: 'black'}}
                />
                <Button 
                    title='Chat'
                    buttonStyle= {{backgroundColor: 'black'}}
                />
            </View>
        </View>
    )
}

export default function PastOrders(props) {
    return(
        <ScrollView>
            <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', borderWidth: 2, margin: 30}}>My Orders</Text>
            <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', borderWidth: 2, marginHorizontal: 50, marginBottom: 30}}>Past Orders</Text>
            <PastOrder veges={['tomato', 'potato']} quantities={['1kg', '2kg']} prices={[100, 80]} orderNo='4534' placedOn='18th june' deliveredBy='Expected Delivery : 10 am tue'/>
            <PastOrder veges={['tomato', 'potato', 'chillie']} quantities={['1kg', '2kg', '500gms']} prices={[100, 80, 40]} orderNo='4534' placedOn='18th june' deliveredBy='Expected Delivery : 10 am tue'/>
            <PastOrder veges={['tomato', 'potato']} quantities={['1kg', '2kg']} prices={[100, 80]} orderNo='4534' placedOn='18th june' deliveredBy='Expected Delivery : 10 am tue'/>
            <PastOrder veges={['tomato', 'potato']} quantities={['1kg', '2kg']} prices={[100, 80]} orderNo='4534' placedOn='18th june' deliveredBy='Expected Delivery : 10 am tue'/>
            <PastOrder veges={['tomato', 'potato']} quantities={['1kg', '2kg']} prices={[100, 80]} orderNo='4534' placedOn='18th june' deliveredBy='Expected Delivery : 10 am tue'/>
            <PastOrder veges={['tomato', 'potato']} quantities={['1kg', '2kg']} prices={[100, 80]} orderNo='4534' placedOn='18th june' deliveredBy='Expected Delivery : 10 am tue'/>
            <PastOrder veges={['tomato', 'potato']} quantities={['1kg', '2kg']} prices={[100, 80]} orderNo='4534' placedOn='18th june' deliveredBy='Expected Delivery : 10 am tue'/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
})