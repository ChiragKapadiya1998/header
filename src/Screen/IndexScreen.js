import React from 'react'
import { View, Text, SafeAreaView,TouchableOpacity} from 'react-native';
import  CustomHeader from '../components/CustomHeader'

const IndexScreen = ({navigation}) => {
    return (
        <SafeAreaView  style={{flex:1}}>
            <CustomHeader  title='index'  isHome={true} navigation={navigation}/>
            <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>IndexScreen</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('DetilsSetting')}>
                <Text>DetilsSetting</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default IndexScreen
