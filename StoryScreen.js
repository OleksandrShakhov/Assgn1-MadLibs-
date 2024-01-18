import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const StoryScreen = ({ route }) => {
    const { name, age, country } = route.params;
    const currentDate = moment().format('MMMM D, YYYY');

    const navigation = useNavigation(); // to initialize useNavigation

    const goToHomeScreen = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image style={styles.logo} source={require('./assets/logo.png')} />
                <Text style={styles.hallPass}>HALL PASS</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image style={styles.logo1} source={require('./assets/logo1.webp')} />
                <Text style={styles.dateTitle}>DATE:
                    <Text style={styles.date}>{currentDate}</Text>
                </Text>
                <Text style={styles.storyLabel}>STORY:</Text>
                <Text style={styles.story}>
                    May name is<Text style={styles.underline}> {name}.</Text> I am <Text style={styles.underline}>{age} </Text>years old. My home country is <Text style={styles.underline}>{country}</Text>.
                </Text>
                <View style={styles.signedContainer}>
                    <Text style={styles.signed}>SIGNED:</Text>
                </View>
                <TouchableOpacity style={styles.homeButton} onPress={goToHomeScreen}>
                    <Text>Back Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    },
    leftContainer: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'column',
    },
    rightContainer: {
        flex: 7,
        paddingLeft: 20,
    },
    logo: {
        width: 120,
        height: 130,
        resizeMode: 'contain',
        borderRadius: 20,
        marginTop: 25,
        marginBottom: 60,
    },
    logo1: {
        width: '100%',
        height: '23%',
        resizeMode: 'contain',
        borderRadius: 50,
    },
    hallPass: {
        fontSize: 40,
        fontWeight: 'bold',
        transform: [{ rotate: '-90deg' }],
        minWidth: 300,
    },
    dateTitle: {
        fontWeight: 'bold',
    },
    date: {
        textDecorationLine: 'underline',
        fontWeight: 400,
    },
    storyLabel: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    story: {
        fontSize: 15,
        lineHeight: 40,
    },
    underline: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    signedContainer: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
        padding: 5,
    },
    signed: {
        marginBottom: 40,
        fontWeight: 'bold',
    },
    homeButton: {
        marginTop: 20,
        width:'40%',
        padding: 10,
        backgroundColor: '#3498db',
        borderRadius: 10,
    },
});

export default StoryScreen;