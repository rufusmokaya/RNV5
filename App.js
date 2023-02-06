import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'

import RootStackScreen from './app/screens/RootStackScreen';

import { DrawerContent } from './app/screens/DrawerContent';

import { AuthContext } from './app/components/context';

import MainTabScreen from './app/screens/MainTabScreen';
import SupportScreen from './app/screens/SupportScreen';
import BookmarkScreen from './app/screens/BookmarkScreen';
import SettingsScreen from './app/screens/SettingsScreen';



const Drawer = createDrawerNavigator();


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if ( isLoading){
    return(
      <View style={{flex:1,justifyContent:'center', alignItem:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return(
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      { userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

