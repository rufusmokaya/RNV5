import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
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
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: (userName, password) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if(userName = 'user' && password == 'pass'){
        userToken= 'dfgdfg'
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      dispatch({ type: 'LOGOUT'});
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false);
      dispatch({ type: 'RETRIEVE_TOKEN', token: 'dfklj' });

    }, 1000);
  }, []);

  if ( loginState.isLoading ){
    return(
      <View style={{flex:1,justifyContent:'center', alignItem:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return(
    <AuthContext.Provider  value={authContext}>
    <NavigationContainer >
      { loginState.userToken !== null ? (
        <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer"  component={MainTabScreen} options = {{headerShown: false}}/>
          <Drawer.Screen name="SupportScreen" component={SupportScreen} options = {{headerShown: false}}/>
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options = {{headerShown: false}}/>
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} options = {{headerShown: false}}/>
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

