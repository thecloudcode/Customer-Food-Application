import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import { LinearGradient } from 'expo-linear-gradient';

import BelowHeaderComponent from '../components/subjectsbelowheader';

const { width: screenWidth } = Dimensions.get('window');

const images = [
    {
      title: 'Twitch',
      lessons: '1',
      uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
    },
    {
        title: 'The Jungle',
        lessons: '2',
      uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
    },
    {
        title: 'Skrillex',
      lessons: '3',
        uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
      },
      {
        title: 'Twitch',
        lessons: '4',
        uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
      },
      {
          title: 'The Jungle',
          lessons: '5',
        uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
      },
      {
          title: 'Skrillex',
        lessons: '6',
          uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
        },
        {
            title: 'Skrillex',
          lessons: '7',
            uri: 'https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg',
          },
 
    // Add more image objects as needed
  ];

  const ImageScrollView = ({ images }) => {
    return (
        
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        horizontal
      >
        {images.map((image, index) => (
          <TouchableOpacity key={index} style={styles.imageContainer}>
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              style={styles.overlay}
            >
              <View>
                {/* <Text style={styles.imageTitle}>{image.title}</Text> */}
                <Text style={styles.imageChapterNumbers}>Lesson {image.lessons}</Text>
                {/* <Text style={styles.imageName}>{image.name}</Text> */}
              </View>
              {/* <TouchableOpacity style={{ marginTop: 7 }}>
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
              </TouchableOpacity> */}
            </LinearGradient>
  
            <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" />
  
            {/* <View
              style={{
                borderTopColor: 'black',
                borderTopWidth: 0,
                width: screenWidth,z
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            ></View> */}
          </TouchableOpacity>
        ))}
        <View style={{ height: 50 }}></View>
      </ScrollView>
    );
  };

  const HomeSubjectScreen = ({navigation}) => {
    return (
        <ScrollView
        contentContainerStyle={styles.scrollViewContainer2}
        // horizontal
      >
      <View style={{ flexGrow: 1, paddingLeft: 10}}>
        <Text style={{fontSize:30, fontWeight: 'bold', marginLeft: 10, marginTop: 20, backgroundColor:'white', width: screenWidth-40, paddingHorizontal: 40, paddingVertical:60, borderRadius: 20, elevation: 7, marginBottom: 20, justifyContent:'center', textAlign: 'center'}}>Quiz</Text>
             {/* <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" /> */}
            

            <Text style={{fontSize:20, fontWeight: 'bold', marginLeft: 10, marginBottom: 10,}}>Hindi</Text>
            <ImageScrollView images={images} />
            <Text style={{fontSize:20, fontWeight: 'bold', marginLeft: 10,marginBottom: 10}}>Mathematics</Text>
            <ImageScrollView images={images} />
            <Text style={{fontSize:20, fontWeight: 'bold', marginLeft: 10, marginBottom: 10}}>English</Text>
            <ImageScrollView images={images} />
      </View>
      </ScrollView>
      
    );
  };
  

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation}/>
      {/* <BelowHeaderComponent /> */}
      <View style={styles.contentContainer}>
        <HomeSubjectScreen />
      </View>
      <FooterComponent navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: '100%'
    
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 50,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  imageName: {
    // marginLeft: 4,
    // marginTop: 10,
    // height: 30,
    fontSize: 16,
    color: 'rgba(255,255,255,0.5)',

    // color: 'white',
    // fontWeight: 'bold',
  },
  imageTitle: {
    // marginLeft: 7,
    // marginTop: 10,
    // height: 30,
    fontSize: 26,
    color :'white',
    fontWeight: 'bold',
  },
  imageChapterNumbers: {
    // marginLeft: 7,
    // marginTop: 10,
    // height: 30,
    fontSize: 16,
    color :'rgba(255,255,255,1)',
    // fontWeight: 'bold',
  },
  scrollViewContainer: {
    flexGrow: 1,
    height: 180,
    // marginTop: -17,
    // paddingVertical: 20,
    alignItems: 'center',
  },
  scrollViewContainer2: {
    flexGrow: 1,
    // height: 180,
    // marginTop: -17,
    // paddingVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: screenWidth - 270,
    height: 150,
    borderRadius: 10,
    // marginLeft: 0,
    marginTop: -30,
    marginHorizontal: 10,
  },
  overlay: {
    position: 'absolute',
    width: screenWidth - 270,
    top: 75,
    height: 75,
    marginTop: -30,

    borderRadius: 10,
    zIndex: 100,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',

    // justifyContent: 'flex-end', // Aligns elements to the bottom in the row direction
    alignItems: 'flex-end',
    justifyContent: 'space-between', // Aligns elements to the bottom in the column direction
  },
  title:{
    width: screenWidth - 60,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 20,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 20,
    elevation: 7,
  }


});

export default Quiz;
