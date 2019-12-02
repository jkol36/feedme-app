import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/Colors'


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> {props.title}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,

    }
})

export default Header