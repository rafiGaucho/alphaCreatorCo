
import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text,Image
} from 'react-native';
import {Icon} from 'native-base' ;
import Video from 'react-native-video';
import YouTube from 'react-native-youtube'

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
  else if (item.type===1) {
  url=item.url.split('v=')
  return (
    <YouTube
      apiKey="AIzaSyBnbTVang-UdpBeXsI8BL6J2pAaVgbKc08"
      videoId={url[1]}   // The YouTube video ID
      play={false}             // control playback of video with true/false
      loop={true}             // control whether the video should loop when ended
      style={{width:'100%',height:'100%'}}
    />
  );
  }
  else if (item.type===3) {
  url=item.url.split('be/')
  return (
    <YouTube
      apiKey="AIzaSyBnbTVang-UdpBeXsI8BL6J2pAaVgbKc08"
      videoId={url[1]}   // The YouTube video ID
      play={false}             // control playback of video with true/false
      loop={true}             // control whether the video should loop when ended
      style={{width:'100%',height:'100%'}}
    />
  );
  }
  else {
    return null;
  }
}
