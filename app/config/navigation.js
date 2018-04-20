import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeNav = StackNavigator({
    Home:{
        screen:Home,
        title:'Home'
    },
    Profile:{
        screen:Profile,
        title: 'Profile'

    },
},{
    headerMode:'none'
});

export const TabNav = TabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            tabBarLabel: ({tintColor}) => <Icon name='ios-home' size={24} color={'white'}/>
        },
    },
    Profile:{
        screen: Profile,
        navigationOptions:{
            tabBarLabel: ({tintColor}) => <Icon name='ios-person' size={24} color={'white'}/>
        },
    },
},{
    tabBarPosition: 'bottom',
    tabBarOptions:{
        style:{
            backgroundColor:'black',

        },
        indicatorStyle:{
            // borderBottomColor: 'white',
            borderBottomWidth: 0.5,
        },
        tabStyle:{
            height: 40,
        }
    }
})