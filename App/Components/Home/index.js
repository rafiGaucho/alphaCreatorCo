import React, {PropTypes} from 'react';
import {
  View,Text,FlatList,
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
    this.viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 100
    }
    this.state={changed:{viewableItems:[{index:0}]}}
  }
  onViewableItemsChanged = (changed) => {
   this.setState({changed})
  }
onEndReached=()=>{console.warn('lkmlmlkmklmkm');}
  render() {

    return (
      <View style={{flex:1}}>
        {/* <ScrollView>
          {this.props.feed.map((item,index)=>{
            return (
              <View>
                <FeedItem prop={item}/>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          data={this.props.feed}
          renderItem={({item,index}) => <FeedItem prop={item} index={index} visibility={this.state.changed}/>}
          ListFooterComponent={({item})=><View style={{height:300,width:300}}><Text>End</Text></View>}
          onEndReached={this.onEndReached}
          viewabilityConfig={this.viewabilityConfig}
          onViewableItemsChanged={this.onViewableItemsChanged}
        />
      </View>
    );
  }
}
mapStateToProps=(state)=>({
  feed:state.feed
})
export default connect(mapStateToProps)(Home)
