import React, {PropTypes} from 'react';
import {
  View,Text,ActivityIndicator,ListView,
  StyleSheet,Image,ScrollView,FlatList
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
        renderFooter={()=>
           <View style={{height:300,alignItems:'center',justifyContent:'flex-start'}}>
          {this.props.isLoading && <ActivityIndicator size="large" color="#0000ff"/>}
          {this.props.isError && <Text>Network Error</Text>}
        </View>}
        />
        {/* <FlatList
          data={this.props.feed}
          renderItem={({item,index}) => <FeedItem prop={item} key={index} />}
          ListFooterComponent={({item})=><View style={{height:500,alignItems:'center',justifyContent:'flex-start'}}>
            {this.props.isLoading && <ActivityIndicator size="large" color="#0000ff"/>}
            {this.props.isError && <Text>Network Error</Text>}
          </View>}

        /> */}
        {/* <ScrollView>
          {this.props.feed.map((item,index)=>{
            return  <FeedItem key={index} prop={item} />
          })}
        </ScrollView>
          {this.props.isLoading && <ActivityIndicator size="large" color="#0000ff"/>}
          {this.props.isError && <Text>Network Error</Text>} */}
      </View>
    );
  }
}
mapStateToProps=(state)=>({
  feed:state.feed,isLoading:state.isLoading,isError:state.isError
})
export default connect(mapStateToProps)(Home)
