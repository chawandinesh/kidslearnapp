import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default function GreatJobScreen(props) {
  const {navigation} = props;
  const {height, width} = Dimensions.get('window');
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <ImageBackground
      blurRadius={0.5}
      imageStyle={{opacity: 0.9}}
      style={{
        flex: 1,
        alignItems: 'center',
        height: height,
        width: width,
        justifyContent: 'center',
      }}
      source={require('../assets/images/kidsschool.jpg')}>
      <View
        style={{
          justifyContent: 'flex-end',
          padding: 10,
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'flex-end',
          width: width,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Icon
            name="home"
            type="FontAwesome"
            raised
            iconStyle={{borderRadius: 20}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image  source={require('../assets/gifs/goodthumb.gif')} style={{height: 100, width: 100}}/>
        <View
          style={{
            width: width * 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderBottomWidth: 10,
            borderRightWidth: 5,
            borderLeftWidth: 5,
            borderLeftColor: '#a7fe73',
            borderRightColor: '#a7fe73',
            borderBottomColor: '#f68',
            backgroundColor: '#000',
            opacity: 0.8,
            padding: 20,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
            GREAT JOB!
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
