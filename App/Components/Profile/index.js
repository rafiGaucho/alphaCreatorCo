import React, {PropTypes} from 'react';
import {
  View,Text,
  StyleSheet,ScrollView,TouchableOpacity
} from 'react-native';
import {Icon} from 'native-base'
import {connect} from 'react-redux'


class List extends React.Component {

  static navigationOptions={
    title:'Profile',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='user' type='SimpleLineIcons' style={{color:tintColor,fontSize:20}}/>;
    },
  }


  render() {
    return (
      <View style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

mapStateToProps=(state)=>({
})
export default connect(mapStateToProps)(List)
