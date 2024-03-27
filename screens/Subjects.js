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
      title: 'Biryani',
      lessons: '₹ 170',
      date : '27 Oct 2023',
      uri: 'https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style.jpg',
    },
    {
        title: 'Egg Roll',
        lessons: '₹ 90',
        date : '27 Oct 2023',
      uri: 'https://assets-global.website-files.com/60d34b8627f6e735cf28df18/637cb1e5770f687580507f95_Chicken%20Roll%20Hero%204.3.jpg',
    },
    {
        title: 'Aloo Dum',
      lessons: '₹ 50',
      date : '27 Oct 2023',
        uri: 'https://www.cookingcarnival.com/wp-content/uploads/2016/04/Kashmiri-Dum-Aloo-4.jpg',
      },
 
    // Add more image objects as needed
  ];

  const HomeSubjectScreen = ({navigation}) => {
    return (
      <View style={{ height: '100%', paddingLeft: 10}}>
        {/* <Text>Swipe Right</Text> */}
        {/* <Text style={{fontSize:20, fontWeight: 'bold'}}>Hello Sara!</Text> */}

        <View style={styles.title}>
            <Text style={{fontSize:25, fontWeight: 'bold', marginBottom: 20}}>Here is your History!</Text>
            <Text style={{fontSize:15}}>Your History, swipe left</Text>
            {/* <Text>Swipe Left</Text> */}
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          horizontal  // Set horizontal prop to true
        >
          {images.map((image, index) => (
            <TouchableOpacity key={index} style={styles.imageContainer} onPress={()=>navigation.push(image.title)}>
              <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                style={styles.overlay}
              >
                <View>
                  <Text style={styles.imageTitle}>{image.title}</Text>
                  <Text style={styles.imageChapterNumbers}>{image.lessons}</Text>
                  <Text style={styles.imageChapterNumbers}>{image.date}</Text>
                  {/* <Text style={styles.imageName}>{image.name}</Text> */}
                </View>
                <TouchableOpacity style={{ marginTop: 7 }}>
                  <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                </TouchableOpacity>
              </LinearGradient>
  
              <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" />
  
              {/* <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 0,
                  width: screenWidth,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              ></View> */}
            </TouchableOpacity>
            
          ))}
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>
      
    );
  };
  

const Subjects = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation}/>
      {/* <BelowHeaderComponent /> */}
      <View style={styles.contentContainer}>
        <HomeSubjectScreen navigation={navigation}/>
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
    color :'rgba(255,255,255,0.7)',
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    flexGrow: 1,
    // marginTop: -17,
    // paddingVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: screenWidth - 60,
    height: 450,
    borderRadius: 20,
    // marginLeft: 0,
    marginTop: -30,
    marginHorizontal: 10,
  },
  overlay: {
    position: 'absolute',
    width: screenWidth - 60,
    top: 200,
    height: 250,
    marginTop: -30,

    borderRadius: 20,
    zIndex: 100,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',

    // justifyContent: 'flex-end', // Aligns elements to the bottom in the row direction
    alignItems: 'flex-end',
    justifyContent: 'space-between', // Aligns elements to the bottom in the column direction
  },
  title:{
    // height:100,
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

export default Subjects;
