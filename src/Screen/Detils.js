import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader'
const  Detils =({navigation})=> {
    return (
    <SafeAreaView>
        <CustomHeader title='Detils' navigation={navigation}/>
        <View>
            <Text>Detils</Text>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
export default  Detils;