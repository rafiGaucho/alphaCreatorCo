import React, {PropTypes} from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

export default class  extends React.Component {
  static navigationOptions={
    title:'Search',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='search1' type='AntDesign' style={{color:tintColor,fontSize:20}}/>;
    },
  }
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text>Search screen</Text>
      </View>
    );
  }
}
