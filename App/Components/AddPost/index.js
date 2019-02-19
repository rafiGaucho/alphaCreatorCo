import React, {PropTypes} from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

export default class  extends React.Component {
  static navigationOptions={
    title:'Add Post',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='edit' type='Feather' style={{color:tintColor,fontSize:20}}/>;
    },
  }
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text>AddPost screen</Text>
      </View>
    );
  }
}
