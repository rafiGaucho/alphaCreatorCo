



import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text,Image
} from 'react-native';
import {Icon} from 'native-base' ;
import Video from 'react-native-video';


export const Media=(props)=>{
  item=props.prop

  if (item.type===0) {
    return (
      <Image
      resizeMethod='resize'
      style={{height:'100%',width:'100%'}}
      resizeMode='contain'
      source={{uri:item.url}}/>
    );
  }
  else if (item.type===4) {
    return (
      <Video source={{uri:item.url}}
       ref={(ref) => {
         this.player = ref
       }}
       controls={true}
       selectedVideoTrack={{
          type: "resolution",
          value: 480
        }}
        paused={props.paused}
       style={{position: 'absolute',top:0,left:0,right:0,bottom:0}} />
    );
  }
  // else if (item.type===1) {
  //
  // }
  else {
    return null;
  }
}
