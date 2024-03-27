import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/home';
import English from './screens/English Lessons';
import Hindi from './screens/Hindi Lessons';
import Mathematics from './screens/Mathematics Lessons';
import Subjects from './screens/Subjects';
import FourOptions from './screens/InsideEachSubject';
// import Subjects from './screens/games';
import Games from './screens/games';
import Quiz from './screens/Quiz';

const Stack = createStackNavigator()

const ScreenOptions = {
    headerShown: false
}

const SignedInStack = ({ navigation }) => (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <NavigationContainer style={{ flex: 1, backgroundColor: 'black' }}>
        <Stack.Navigator initialRouteName='Home' screenOptions={ScreenOptions}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='English' component={English}/>
          <Stack.Screen name='Hindi' component={Hindi}/>
          <Stack.Screen name='Mathematics' component={Mathematics}/>
          <Stack.Screen name='Subjects' component={Subjects}/>
          <Stack.Screen name='FourOptions' component={FourOptions}/>
          <Stack.Screen name='Games' component={Games}/>
          <Stack.Screen name='Quiz' component={Quiz}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
  

export default SignedInStack
