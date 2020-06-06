<template>
    <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'vue-native-router'
import HomeScreen from './screens/Home'
import HistoryScreen from './screens/History'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const StackNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: (info) => {
                    return <MaterialIcons  name="home" size={25} color={info.tintColor}/>
                }
            }
        },
        History: {
            screen: HistoryScreen,
            navigationOptions: {
                tabBarIcon: (info) => {
                    return <MaterialIcons  name="history" size={25} color={info.tintColor}/>
                }
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showLabel: false,
            activeTintColor: 'blue',
            inactiveTintColor:'red',
            style: {
                borderTopColor: 'transparent'
            }
        }
    }
)

const AppNavigator = createAppContainer(StackNavigator)

export default {
    components: {
        AppNavigator
    }   
}
</script>
