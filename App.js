import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image,SafeAreaView,ScrollView,View,TouchableOpacity,Text} from 'react-native'
import HomeScreen from './src/Screen/HomeScreen';
import IndexScreen from './src/Screen/IndexScreen'
import Detils from './src/Screen/Detils';
import DetilsSetting from './src/Screen/DetilsSetting';
import Content from './src/Screen/Content';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack (){
  return(
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Detils" component={Detils} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
function IndexStack (){
  return(
    <Stack.Navigator initialRouteName='Index'>
    <Stack.Screen name="Index" component={IndexScreen} options={{headerShown:false}} />
    <Stack.Screen name="DetilsSetting" component={DetilsSetting} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}
function CustomeDrawerContent(props) {
  return(
    <SafeAreaView style={{flex:1,marginLeft:15}}>
      <ScrollView style={{marginTop:5}}>
        <View style={{height:150,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('./src/Image/profile.png')} style={{width:120,height:120 ,resizeMode:'contain'}} />
        </View>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('MenuTab')}>
            <Text>Menu Tab</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('Content')}>
            <Text>Content</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('Detils')}>
            <Text>Detils</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>props.navigation.navigate('DetilsSetting')}>
            <Text>DetilsSetting</Text>
         </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
  
}

function NavigationTab (){
  return(
    <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./src/Image/home-black.png')
                : require('./src/Image/home.png');
            } else if (route.name === 'index') {
              iconName = focused 
              ? require('./src/Image/settings-black.png') 
              : require('./src/Image/settings.png');
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width:30,height:20 ,resizeMode:'contain'}} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="index" component={IndexStack} />
    </Tab.Navigator>

  )
}
const  App =()  =>{
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props=>CustomeDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={NavigationTab} />
        <Drawer.Screen name="Content" component={Content} />
      </Drawer.Navigator>
  </NavigationContainer>
  );
}

export default App;