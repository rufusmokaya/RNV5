import React from "react";
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, TouchableHighlight } from "react-native";

// import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    // duration="1500"
                source={require('../assets/RiaraLogo2.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View> 
            <View style={styles.footer}>
                <Text style={styles.title}>Welcome To Riara University App!</Text>
                <Text style={styles.text}>Sign In With Details Provided By IT Office!</Text>
                <View style={styles.button}>
                    <TouchableOpacity  style={styles.signIn} underlayColor={"#483493"}  onPress={() =>navigation.navigate('SignInScreen')}>
                        
                        <Text style={styles.textSign}>Get Started</Text> 
                        <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                    </TouchableOpacity>
                </View>
                
            </View> 

        </View>

    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#7D0552'
      },
      header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
      },
      logo: {
          width: height_logo,
          height: height_logo
      },
      title: {
          color: '#05375a',
          fontSize: 30,
          fontWeight: 'bold'
      },
      text: {
          color: 'grey',
          marginTop:5
      },
      button: {
          alignItems: 'flex-end',
          marginTop: 30
      },
      signIn: {
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row',
        //backgroundColor: '#483493'
          backgroundColor: '#05375a'
      },
      textSign: {
          color: 'white',
          fontWeight: 'bold'
      }
});