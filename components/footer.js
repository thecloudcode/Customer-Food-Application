import React from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const FooterComponent = ({navigation}) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => {
          // handleIconPress("home");
          navigation.push('Home');
        }}>
        <Feather name="shopping-bag" size={25} color="black" />
      <Text style={{fontSize: 11}}>Delivery</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}
      onPress={() => {
        // handleIconPress("home");
        navigation.push('Subjects');
      }}>
        <Feather name="clock" size={25} color="black" />
      <Text style={{fontSize: 11}}>History</Text>

      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.mikeContainer}>
      <Ionicons name="ios-mic" size={30} color="black" />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.iconContainer}
      onPress={() => {
        // handleIconPress("home");
        navigation.push('Games');
      }}>
      <Ionicons name="wallet" size={25} color="black" />
      <Text style={{fontSize: 11}}>Money</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.iconContainer}
      onPress={() => {
        // handleIconPress("home");
        navigation.push('Quiz');
      }}>
      <AntDesign name="menuunfold" size={24} color="black" />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    borderTopWidth: 3,
    borderTopColor: '#e6e6e6',
    flexDirection: 'row',
    elevation: 20,
    paddingTop: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderTopWidth: 1,
    // borderTopColor: 'white',
    height: 65,
    paddingHorizontal: 20,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mikeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'aqua',
    height: 77,
    width: 40,
    bottom: 20,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#cce5ff',
    // paddingVertical: 25,
    // paddingHorizontal:
    borderRadius: 50,
  }
});

export default FooterComponent;
