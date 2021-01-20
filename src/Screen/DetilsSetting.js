import React from 'react'
import { SafeAreaView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import CustomHeader from '../components/CustomHeader'
const  DetilsSetting =({navigation})=> {
    return (
        <SafeAreaView>
            <CustomHeader title="Setting" navigation={navigation}/>
            <View>
                <Text>DetilsSetting</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
export default  DetilsSetting;