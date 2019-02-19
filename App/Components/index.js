import React, { Component } from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createAppContainer} from 'react-navigation'
import {connect} from 'react-redux'

import Home from './Home'
import AddPost from './AddPost'
import Search from './Search'
import Notifications from './Notifications'
import Profile from './Profile'
import {fetchFeed} from './../Store/actions'

class Components extends React.Component {
  componentDidMount(){
    this.props.fetchFeed()
  }
  render() {
      return (<Navigator />)
  }
}

const BottomNavigator = createMaterialBottomTabNavigator({
  Home: {screen: Home },
  Search: {screen:Search},
  AddPost: {screen:AddPost},
  Notifications: {screen: Notifications },
  Profile:{screen:Profile}

}, {
  initialRouteName: 'Home',
  shifting:false,
  activeColor: '#ff9100',
  inactiveColor: 'grey',
  barStyle: { backgroundColor: 'white' },
});

const Navigator=createAppContainer(BottomNavigator)

mapStateToProps=(state)=>({
})
mapDispatchToProps={
fetchFeed:fetchFeed
}
export default connect(mapStateToProps,mapDispatchToProps)(Components)
