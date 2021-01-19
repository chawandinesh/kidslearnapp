import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default function LearnOptionsScreen(props) {
  const {navigation} = props;
  const {height, width} = Dimensions.get('window');
  const lessons = [
    {displayName: 'ALPHABETS', name:'alphabets'},
    {displayName: 'VEGETABLES', name: 'vegetables'},
    {displayName: 'BIRDS', name:'birds'},
    {displayName: 'ANIMALS', name:'animals'},
    {displayName: 'VEHICLES', name:'vehicles'},
    {displayName: 'FRUITS', name:'fruits'},
  ];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <ImageBackground
      imageStyle={{opacity: 0.5}}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      source={require('../assets/images/kidsschool.jpg')}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginBottom: height * 0.05}}>
        <Icon
          type="AntDesign"
          // reverse
          name="home"
          raised
          size={30}
          iconStyle={{fontSize: 35, color:'#001'}}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {lessons.map((e, idx) => {
          return (
            <View
              key={idx}
              style={{
                opacity: 0.8,
                elevation: 3,
                width: '100%',
                alignItems: idx % 2 ? 'flex-end' : 'flex-start',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LearningScreen', {data: e})}
                style={{
                  padding: 20,
                  borderTopLeftRadius: idx % 2 ? 20 : 0,
                  borderBottomLeftRadius: idx % 2 ? 20 : 0,
                  borderTopRightRadius: idx % 2 ? 0 : 20,
                  borderBottomRightRadius: idx % 2 ? 0 : 20,
                  width: width * 0.6,
                  borderEndWidth: 15,
                  borderEndColor:'red',
                  borderLeftWidth:2,
                  borderBottomWidth:2,
                  borderLeftColor:'#1f78',
                  borderBottomColor:'#f76',
                  borderTopWidth: 14,
                  borderTopColor:'#3453f0',
                  margin: 10,
                  backgroundColor: 'black',
                }}>
                <Text
                  style={{fontSize: 25, textAlign: 'center', color: '#ffe'}}>
                  {e.displayName}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ImageBackground>
  );
}
