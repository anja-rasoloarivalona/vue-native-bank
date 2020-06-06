<template>
    <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'vue-native-router'
import HomeScreen from './screens/Home'
import HistoryScreen from './screens/History'
import StartupScreen from './screens/Startup'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const BottomNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: (info) => {
                    return <MaterialIcons  name="home" size={30} color={info.tintColor}/>
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

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Main: BottomNavigator
})
const AppNavigator = createAppContainer(MainNavigator)

export default {
    components: {
        AppNavigator
    }   
}
</script>
