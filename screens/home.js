import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterComponent from '../components/footer';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import { FontAwesome } from '@expo/vector-icons';

// import HeaderComponent from '../components/header';
import HeaderComponent from '../components/header home screen';
import BelowHeaderComponent from '../components/subjectsbelowheader';

const { width: screenWidth } = Dimensions.get('window');

const images = [
    {
      title: 'Paradise Biryani',
      name: 'Hyderabadi Chicken Biryani',
      details: '40-45 min • 10 km',
      uri: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Patwari Vaishno Dhaba',
        name: 'Chapter 1 The Prince of Birmingham',
      details: '40-45 min • 17 km',
      uri: 'https://images.pexels.com/photos/7353388/pexels-photo-7353388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'KFC',
      name: 'Offers',
      details: '40-45 min • 20 km',
        uri: 'https://i.pinimg.com/564x/6f/a1/ef/6fa1ef7fc7d8fbefbdd9af40d152120c.jpg',
      },
      {
        title: 'Burger King',
      name: 'Chapter 1 The Prince of Birmingham',
      details: '40-45 min • 7 km',
        uri: 'https://i.pinimg.com/564x/5b/91/b1/5b91b1564045b48ae151033e47c86fd4.jpg',
      },
      {
        title: 'Subway',
      name: 'Chapter 1 The Prince of Birmingham',
      details: '40-45 min • 11 km',
        uri: 'https://i.pinimg.com/564x/f5/bd/55/f5bd5510b2a1c2dac5470a3a813cfed0.jpg',
      },
    // Add more image objects as needed
  ];

const HomeMainScreen = ({navigation}) => {

  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredImages = images.filter(image =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

return (
    <View style={{height: '100%'}}>
      <View style={{height: 100, marginTop: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <View style={{flexDirection:'row'}}>
        <Feather name="map-pin" size={24} color="grey" />
        {/* <Text style={{fontWeight: 'bold', fontSize: 17, color: 'grey', marginLeft: 7}}>Delhi</Text> */}
        </View>
        <Ionicons name="person" size={24} color="grey" style={{borderRadius: 54}}/>

        </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      </View>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={{ height: 70, width: screenWidth - 20, marginHorizontal: 20, borderRadius: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 5}}>
    <View style={{flexDirection: 'column'}}>
    <Text style={styles.GMtext}>Good Morning, Sara!</Text>
    <Text style={styles.welcome}>The Taste of Ability!</Text>
    </View>
    </View>
    <View style={{ height: 40, width: screenWidth - 170, marginHorizontal: 20, borderRadius: 40, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 5, backgroundColor: 'black', elevation: 1}}>
    <View style={{flexDirection: 'column'}}>
    <Text style={{color:'white', fontWeight: 'bold', fontSize: 17}}>Order your First Food</Text>
    </View>
    </View>

    {filteredImages.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
        <Image source={{ uri: image.uri }} style={styles.image} resizeMode="cover" />
        {/* </View> */}
        <View style={{borderTopColor:'black', width: screenWidth-20, flexDirection:'row', justifyContent: 'space-between', backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius:10, paddingVertical: 20, marginHorizontal:20, elevation: 4}}>
        <View style={{flexDirection:'column'}}>
        {/* <View style={{height: 30, width: 30, borderRadius: 20, elevation: 1, marginLeft: 7, marginTop: 10, backgroundColor: 'white'}}></View> */}
        <Text style={styles.imageTitle}>{image.title}</Text>
        <Text style={styles.imageName}>{image.name}</Text>
        <Text style={styles.imageName}>{image.details}</Text> 
        </View>
        <TouchableOpacity style={{marginTop: 12}}>
        <MaterialCommunityIcons name="dots-vertical" size={20} color="black" />
        </TouchableOpacity>
        </View>
        </View>
    ))}
    <View style={{height: 50}}></View>
    </ScrollView>
    </View>
);
};

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <HeaderComponent navigation={navigation}/> */}
      {/* <BelowHeaderComponent /> */}
      <View style={styles.contentContainer}>
        <HomeMainScreen navigation={navigation}/>
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
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    // marginHorizontal: 10,
  },
  searchBar: {
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 17,
    height: 40,
    elevation: 4,
    backgroundColor: 'white',
    
    // borderWidth: 1,
    padding: 10,
    marginBottom: 16,
  },
  imageName: {
    marginLeft: 10,
    // marginTop: 13,
    height: 30,
    fontSize: 12,
    // fontWeight: 'bold',
  },
  imageTitle: {
    marginLeft: 10,
    marginTop: 13,
    height: 30,
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    flexGrow: 1,
    // marginTop: -17,
    paddingVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: screenWidth-20,
    marginHorizontal:20,
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // elevation: 4
    // borderRadius: 10,
  },
  offers:{
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize:20,
  },
  offers2:{
    marginLeft: 10,
    // fontWeight: 'bold',
    fontSize:13,
  },
  GMtext:{
    // marginLeft: 10,
    fontWeight: 'bold',
    fontSize:27,
  },
  welcome:{
    // marginLeft: 10,
    // fontWeight: 'bold',
    fontSize:13,
  },
});

export default Home;
