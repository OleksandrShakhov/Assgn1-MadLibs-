import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StoryScreen from './StoryScreen';

const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');

    const clearFields = () => {
        setName('');
        setAge('');
        setCountry('');
    };

    const goToStoryPage = () => {
        // to check if all fields are filled
        if (name && age && country) {
            navigation.navigate('Story', { name, age, country });
        } else {
            Alert.alert('Please fill in all the blanks.');
        }
    };

    // this function is to clear fields when the screen is in focus
    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {
            clearFields();
        });
        return unsubscribeFocus;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mad Libs Game</Text>
            <Text style={styles.descTitle}>Fill in the blanks with words of your choice:</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    value={age}
                    onChangeText={(text) => setAge(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Home Country"
                    value={country}
                    onChangeText={(text) => setCountry(text)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={goToStoryPage}>
                <Text style={styles.buttonText}>Make My Hall Pass</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clearButton} onPress={clearFields}>
                <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Story" component={StoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    descTitle: {
        marginBottom: 15,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 5,
        width: 160,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    clearButton: {
        marginTop: 15,
        backgroundColor: '#e74c3c',
        padding: 15,
        borderRadius: 5,
        width: 160,
        alignItems: 'center',
    },
    clearButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default App;
