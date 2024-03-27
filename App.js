import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Home from './screens/home';
import Lessons from './screens/English Lessons';
import Subjects from './screens/Subjects';
import FourOptions from './screens/InsideEachSubject';
// import Subjects from './screens/games';
import Games from './screens/games';
import Quiz from './screens/Quiz';
import SignInScreen from './screens/Sign In';

import SignedInStack from './navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <SignedInStack/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
