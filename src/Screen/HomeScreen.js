import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView  style={{flex:1}}>
            <CustomHeader 
               title='Home' 
               isHome={true} 
               navigation={navigation}/>
        <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Detils')}>
                <Text>Detils</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default HomeScreen;
