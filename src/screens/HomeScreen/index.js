import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeMap from '../../components/HomeMap'
import Notifications from '../../components/Notifications'

const HomeScreen = () => {
    return (
        <View>
            <HomeMap />
            <Notifications />  
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
});


