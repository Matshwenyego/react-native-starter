import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <ScrollView>
                <Text>Welcome to the home page</Text>
            </ScrollView>
        )
    }
}