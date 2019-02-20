import React, {PropTypes} from 'react';
import {
  View,Text,FlatList,ListView,
  StyleSheet,Image,ScrollView
} from 'react-native';
import {Icon} from 'native-base'
import {connect} from 'react-redux'

import FeedItem from './FeedItem'


class Home  extends React.Component {
 //  static getDerivedStateFromProps(nextProps, prevState) {
 //  return {
 //    ...prevState,
 //    videoPaused: !nextProps.navigation.isFocused()
 //  }
 // }

  static navigationOptions={
    title:'Home',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='home' type='AntDesign' style={{color:tintColor,fontSize:20}}/>;
    },
  }
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{}}>

        <ListView
        dataSource={this.props.feed}
        renderRow={(rowData) => <FeedItem prop={rowData} />}
        renderFooter={()=> <View style={{height:500}}></View>}
        scrollRenderAheadDistance={100}
        />

      </View>
    );
  }
}
mapStateToProps=(state)=>({
  feed:state.feed
})
export default connect(mapStateToProps)(Home)
