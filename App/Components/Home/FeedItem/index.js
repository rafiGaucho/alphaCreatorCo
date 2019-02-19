import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text,Image
} from 'react-native';
import {Icon} from 'native-base' ;
import ViewMoreText from 'react-native-view-more-text';

import{heightScreen} from '../../../ScreenInfo'

export default class  extends React.Component {
  constructor(props) {
    super(props);

  }
  renderViewMore(onPress){
    return(
      <Text onPress={onPress}>View more</Text>
    )
  }
  renderViewLess(onPress){
    return(
      <Text onPress={onPress}>View less</Text>
    )
  }
  render() {
    item=this.props.prop
    console.warn(item);
    return (
      <View style={{width:'100%',backgroundColor:'white'}}>

        <View style={{width:'100%',height:heightScreen*2.5,backgroundColor:'white',flexDirection:'row',
          alignItems:'center',}}>
          <View style={{
            marginLeft:'3%'}}>
            <Image style={{height:heightScreen*2,width:heightScreen*2,borderRadius:heightScreen,}}  source={{uri:item.thumbnail}}/>
          </View>
          <View style={{alignItems:'center',justifyContent:'center',marginLeft:'3%'}}>
            <Text style={{color:'black',fontSize:16,fontWeight:'400'}}>Faizan Sayed</Text>
            <Text style={{color:'black',fontSize:11}}>2/12/1212,5:06:06 PM</Text>
          </View>
        </View>

        <View style={{height:heightScreen*7,width:'100%',backgroundColor:'grey'}}></View>

        <View style={{height:heightScreen*1.5,flexDirection:'row',backgroundColor:'white',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',marginLeft:'3%',alignItems:'center'}}>
            <Icon name='hearto' type='AntDesign' style={{color:'#ff9100',fontSize:20}}/>
            <Text style={{marginLeft:'5%'}}>0 likes</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
            <View style={{flexDirection:'row'}}>
              <Icon name='whatsapp' type='FontAwesome' style={{color:'grey',fontSize:22}}/>
              <Text style={{fontSize:14,marginLeft:'5%'}}>{item.whatsappShareCount}</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:'10%'}}>
              <Icon name='facebook' type='FontAwesome' style={{color:'grey',fontSize:22}}/>
              <Text style={{fontSize:14,marginLeft:'5%'}}>{item.fbShareCount}</Text>
            </View>
            <View style={{alignItems:'flex-end',marginLeft:'13%',marginRight:'3%'}}>
              <Icon name='share' type='FontAwesome' style={{color:'grey',fontSize:22}}/>
            </View>
          </View>
        </View>

        <View style={{width:'100%',marginLeft:'5%',marginBottom:'5%'}}>
          <Text style={{fontSize:17}}>{item.title}</Text>
          <ViewMoreText
           numberOfLines={3}
           renderViewMore={this.renderViewMore}
           renderViewLess={this.renderViewLess}
           textStyle={{textAlign: 'center'}}
           >
           <Text>{item.description}</Text>
          </ViewMoreText>
          <Text style={{marginTop:'5%',color:'#ffb74d'}}>#raenaspeaks #beauty #honestreview </Text>
        </View>
      </View>
    );
  }
}
