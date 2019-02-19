import React, {PropTypes} from 'react';
import {
  View,Text,
  StyleSheet,Image,ScrollView
} from 'react-native';
import {Icon} from 'native-base'
import {connect} from 'react-redux'

import FeedItem from './FeedItem'


class Home  extends React.Component {
  static navigationOptions={
    title:'Home',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='home' type='AntDesign' style={{color:tintColor,fontSize:20}}/>;
    },
  }
  constructor(props) {
    super(props);
    console.warn(this.props.feed);
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.props.feed.map((item,index)=>{
            return (
              <View>
                <FeedItem prop={item}/>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
mapStateToProps=(state)=>({
  feed:state.feed
})
export default connect(mapStateToProps)(Home)
