import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Unit from '../components/Units';

const HomeScreen =({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity 
                        style={{alignItems: "flex-end", margin:16 }}
                        onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 none="bars" size={24} color="#161924" />
                    </TouchableOpacity>
                    <View style={{flex :1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={styles.text}>{this.props.name}</Text>
                    </View>


                </SafeAreaView> */}


                <View style={styles.textWrapper} >
                    <Text style={styles.sectionTitle} >
                        Units For This Semester
                    </Text >

                    <View style={styles.items}>
                        <Unit text={'RCS 203 : Introduction To Digital Logics'}/>
                        <Unit text={'RCS 203 : System Analysis'}/>
                        <Unit text={'RCS 306 : Object Oriented & Design'}/>
                        <Unit text={'RCS 302 : Compiler Construction'}/>
                        <Unit text={'RCS 203 : Introduction To Digital Logics'}/>
                        <Unit text={'RCS 203 : System Analysis'}/>
                        <Unit text={'RCS 306 : Object Oriented & Design'}/>
                        <Unit text={'RCS 302 : Compiler Construction'}/>   
                        <Unit text={'RCS 302 : Compiler Construction'}/> 
                        <Unit text={'RCS 302 : Compiler Construction'}/> 
                        <Unit text={'RCS 302 : Compiler Construction'}/>  
                    </View>

                </View>
                {/* <Text>Home Screen</Text>
         <Button
           title="Go to details screen"
           onPress={() => navigation.navigate("Details")}/> */}
            </View>

            </ScrollView>
      
    );
 };

export default HomeScreen;

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    text:{
        color: "#161924",
        fontSize: 20,
        fontWeight:"500"
    },
    textWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#05375A"
    },
    items: {
        marginTop:30,
    },
})