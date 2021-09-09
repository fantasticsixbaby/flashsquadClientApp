import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome UQ Studetns</Text>
            <Text style={styles.text}>This is built for UQ students</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2b80ff',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 13,
        marginBottom: 10,
    },
    learnMore: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
