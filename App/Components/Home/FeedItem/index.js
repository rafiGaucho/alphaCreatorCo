import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text,Image
} from 'react-native';
import {Icon} from 'native-base' ;
import ViewMoreText from 'react-native-view-more-text';
import Video from 'react-native-video';

import{heightScreen} from '../../../ScreenInfo'
import {Media} from './Media'

export default class FeedItem  extends React.Component {
  constructor(props) {
    super(props);

  }
  renderViewMore(onPress){
    return(
      <Text style={{color:'#212121'}} onPress={onPress}>Show more</Text>
    )
  }
  renderViewLess(onPress){
    return(
      <Text style={{color:'#212121'}} onPress={onPress}>Show less</Text>
    )
  }
  tConv24(time24) {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  };

  render() {
    item=this.props.prop
    array=item.updatedAt.split('T')
    datearray=array[0].split('-')
    date=datearray[2] + '/' + datearray[1] + '/' + datearray[0];
    time=array[1].split('.')[0]
    timeIn12=this.tConv24(time)
    paused=true
    return (
      <View style={{width:'100%',backgroundColor:'white'}}>

        <View style={{width:'100%',height:heightScreen*2.5,backgroundColor:'white',flexDirection:'row',
          alignItems:'center',}}>
          <View style={{
            marginLeft:'3%'}}>
            <Image style={{height:heightScreen*2,width:heightScreen*2,borderRadius:heightScreen,}}  source={{uri:item.thumbnail}}/>
          </View>
          <View style={{alignItems:'flex-start',justifyContent:'center',marginLeft:'3%'}}>
            <Text style={{color:'black',fontSize:16,fontWeight:'400'}}>Faizan Sayed</Text>
            <Text style={{color:'black',fontSize:11}}>{date} , {timeIn12}</Text>
          </View>
        </View>

        <View style={{height:heightScreen*8,width:'100%',alignItems:'center',backgroundColor:'silver'}}>
          <Media prop={item.content[0]} paused={paused}/>
        </View>

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

        <View style={{width:'95%',marginLeft:'2%',marginBottom:'3%'}}>
          <Text style={{fontSize:15,fontWeight:'400'}}>{item.title}</Text>
          <ViewMoreText
           numberOfLines={2}
           renderViewMore={this.renderViewMore}
           renderViewLess={this.renderViewLess}
           textStyle={{}}
           >
           <Text style={{overflow:'hidden'}}>{item.description}</Text>
          </ViewMoreText>
          <View style={{flexDirection:'row'}}>
            {item.tags.map((tag,index)=>{
              return (
                <Text style={{marginTop:'3%',color:'#ffb74d',}}>#{tag} </Text>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}
