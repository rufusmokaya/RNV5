import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen =({navigation}) => {
    return (
       <View style={styles.container}>
         <Text>This is where all the notifications will appear</Text>
         {/* <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}/>
         <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}/>
         <Button
            title="Go to back"
            onPress={() => navigation.goBack()}/>
         <Button
            title="Go to the first screen"
            onPress={() => navigation.popToTop()}/> */}
       </View>
    );
  };

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})