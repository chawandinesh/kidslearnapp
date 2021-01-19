import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
//import TrackPlayer from 'react-native-track-player';
// import BgAudio from 'react-native-background-audio'
// import Sound from 'react-native-sound';

export default function HomeScreen(props) {
  const {height, width} = Dimensions.get('window');
  const {navigation} = props;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

  

    // TrackPlayer.play();
  }, [props.navigation]);

  

  const goToOptions = () => {
    navigation.navigate('LearnOptionsScreen');
  };
  return (
    <ImageBackground
      style={{flex: 1, opacity: 0.8}}
      source={require('../assets/images/kidsschool.jpg')}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity onPress={() => goToOptions()} style={{backgroundColor:'#f75664',padding: 20, width: width * 0.5, alignItems:'center', borderRadius: 25,borderStartWidth:4,borderEndWidth:4, borderBottomWidth:2}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',

              // borderRadius: 25,
              // paddingTop: 10,
              // paddingBottom: 10,
              // paddingLeft: 50,
              // paddingRight: 50,
              // backgroundColor: '#f78',
              // // shadowColor: 'rgba(0, 0, 0, 0.1)',
              // shadowOpacity: 0.8,
              // elevation: 6,
              // shadowRadius: 29,
              // shadowOffset: {width: 1, height: 13},
            }}>
            START
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
