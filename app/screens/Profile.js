import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';

export default class Profile extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text>Welcome to the profile page</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
});