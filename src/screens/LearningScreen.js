import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  NativeEventEmitter,
  NativeModules,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Tts from 'react-native-tts';
import {contentAlphabets, contentVegetables, contentBirds, contentAnimals, contentVehicles, contentFruits} from './content';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import TrackPlayer from 'react-native-track-player';
import {Icon} from 'react-native-elements';

export default function LearningScreen(props) {
  const {navigation} = props;
  const {height, width} = Dimensions.get('window');
  const {data} = props.route.params;
  const [count, setCount] = React.useState(0);
  console.log(data);

  const content = {
    alphabets: contentAlphabets,
    animals: contentAnimals,
    birds: contentBirds,
    fruits: contentFruits ,
    vegetables: contentVegetables,
    vehicles: contentVehicles,
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const getName = () => {
    switch (data.name) {
      case 'ALPHABETS': {
        return content.alphabets[count].name;
      }
      case 'VEGETABLES': {
        return content.vegetables[count].name;
      }
    }
  };

  const playSound = (countValue) => {
    Tts.speak(content[data.name][countValue].name, {
      iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
      rate: 0.5,
    });
    const ee = new NativeEventEmitter(NativeModules.TextToSpeech);
    ee.addListener('tts-start', () => {});
    ee.addListener('tts-finish', () => {});
    ee.addListener('tts-cancel', () => {});
   // console.log(content[data.name][countValue].name)
    // console.log(countValue)
   
  };

  const decreaseCount = () => {
    if (count === 0) return;
    setCount(count - 1);
    playSound(count - 1);
  };

  const increaseCount = () => {
    if (count === content[data.name].length - 1) {
      navigation.navigate('GreatjobScreen');
      return;
    } else {
      setCount(count + 1);
      playSound(count + 1);
    }
  };
  return (
    <ImageBackground
      blurRadius={0.5}
      imageStyle={{opacity: 0.9}}
      style={{
       // flex: 1,
        alignItems: 'center',
        height: height,
        width: width,
        justifyContent: 'center',
      }}
      source={require('../assets/images/kidsschool.jpg')}>
      <View
        style={{
         // flex: 1,
          backgroundColor: 'rgba(0,0,0,0.2)',
          width: width,
          height: height
        }}>
        {/* wraper1//// */}
        <View style={{height: height * 0.2}}>
          <View style={{height: height * 0.1, alignItems: 'flex-end', justifyContent:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Icon
                name="home"
                type="FontAwesome"
                raised
                iconStyle={{borderRadius: 20}}
              />
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', height: height * 0.1, justifyContent: 'center'}}>
            <View
              style={{
                backgroundColor: '#fffa',
                borderTopRightRadius: 20,
                borderStartWidth: 12,
                borderBottomWidth: 7,
                borderBottomLeftRadius: 20,
                width: width * 0.7,
                padding: 5,
              }}>
              <Text
                style={{
                  borderRadius: 10,
                  // backgroundColor: '#ff9',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                  textShadowColor: '#f99',
                  textShadowRadius: 10,
                  textShadowOffset: {width: 1, height: 1},
                }}>
                {content[data.name][count].name}
                {/* {getName()} */}
              </Text>
            </View>
          </View>
        </View>

        {/* wraper2.... */}

        <View style={{justifyContent: 'center',height: height * 0.5}}>
          <Image
            source={content[data.name][count].image}
            resizeMode="contain"
            style={{
              height: height * 0.3,
              width: width,
              alignSelf: 'center',
            }}
          />
        </View>
        {/* wraper3.... */}
        <View style={{height: height * 0.3, justifyContent:'center'}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingLeft: 30}} onPress={decreaseCount}>
              <Icon
                name="caretleft"
                type="antdesign"
                raised={true}
                // reverse
                color="#449"
                iconStyle={{borderRadius: 30}}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{paddingRight: 30}}
              onPress={increaseCount}>
              <Icon
                name="caretright"
                type="antdesign"
                raised={true}
                // reverse
                iconStyle={{borderRadius: 30}}
                color="#449"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginTop: height * 0.03,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={(e) => playSound(count)}
              style={{
                width: width * 0.7,
                backgroundColor: '#f45',
                borderRadius: 30,
                borderRightWidth: 6,
                borderBottomWidth: 3,
                borderLeftWidth: 6,
              }}>
              <Icon
                type="font-awesome"
                name="music"
                size={30}
                color="#fff"
                style={{padding: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
