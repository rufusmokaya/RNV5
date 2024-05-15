import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';

const ProfileScreen = () => {
        return(
            <View style={styles.container}>
                <View style={styles.userInfoSection} onPress={() => {}}>
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <Avatar.Image
                                // size={50}
                                // source={require('../assets/IMG_5946.JPG')}
                            />
                            <View style={{marginLeft:15,
                            flexDirection:'column'}}>
                                <Title style={styles.title}>Rufus Mokaya Masita</Title>
                                <Caption style={styles.caption}>19ZAD104415</Caption>
                                <Caption style={styles.caption}>rufus.masita@riarauniversity.ac.ke</Caption>
                            </View>
                        </View>
                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>563</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View> */}
                    </View>
                <Text> This is where student information will be</Text>
                {/* <Button
                    title="Scan Screen"
                    onPress={() => alert('Button Clicked!')}/> */}
            </View>
        );
};

export default ProfileScreen;

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