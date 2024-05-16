import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';

const TimtableScreen = () => {
  return (
    <View style={styles.container}>
                <Text> This is where the Timetable will be</Text>
            </View>
  )
}

export default TimtableScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 1,
        fontWeight: 'bold',
    },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})