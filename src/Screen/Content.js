import React from 'react'
import { View, Text ,SafeAreaView} from 'react-native'
import CustomHeader from '../components/CustomHeader'

const Content = ({navigation}) => {
    return (
        <SafeAreaView>
        <CustomHeader title='Detils' navigation={navigation}/>
        <View>
            <Text>Detils</Text>
        </View>
    </SafeAreaView>
    )
}

export default Content
