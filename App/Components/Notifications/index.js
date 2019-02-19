import React, {PropTypes} from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

export default class  extends React.Component {
  static navigationOptions={
    title:'Notifications',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='notifications-none' type='MaterialIcons' style={{color:tintColor,fontSize:20}}/>;
    },
  }
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text>Notifications screen</Text>
      </View>
    );
  }
}
