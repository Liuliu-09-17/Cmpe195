import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('RealData')}>
                        <Text>Click here go to Real Data</Text>
                    </TouchableOpacity> */}
                    <TextInput
                        style={styles.input}
                        placeholder='Search your crops' />

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('RealData')}
                        style={styles.tag}>

                        <Image
                            source={require("../assets/images/apple.png")}
                            style={styles.tagImage} />
                        <View>
                            <Text
                                style={styles.tagName}>Apple</Text>
                            <Text
                                style={styles.tagDiscription}>Discription</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EditSensor')}>
                            <Text>Edit</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 300,
    },
    tag: {
        flexDirection: "row",
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#777',
        height: 80,
        width: 300,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    tagImage: {
        marginHorizontal: 10,
        marginVertical: 10,
        height: 60,
        width: 60
    },
    tagName: {
        // marginHorizontal: 80, 
        // marginVertical: -70,
        fontWeight: 'bold',
        fontSize: 16,
    },
    tagDiscription: {
        marginHorizontal: 0,
        marginVertical: 0,
        fontSize: 16,
    },
});