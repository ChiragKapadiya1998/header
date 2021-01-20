import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'

const CustomHeader = ({title,isHome,navigation}) =>{
    return (
        <View style={{flexDirection:'row',height:50}}> 
           <View  style={{flex:1,justifyContent:'center'}}>
                {isHome ? 
                 <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                     <Image style={{height:30,width:30 ,marginLeft:5}}
                     source={require('../Image/menu.png')}
                     resizeMode='contain'/>
                 </TouchableOpacity>
                
                : <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=> navigation.goBack()}>
                        <Image style={{height:25,width:25 ,marginLeft:5}}
                            source={require('../Image/back.png')}
                            resizeMode='contain'
                        />
                        <Text>Back</Text>
                    </TouchableOpacity>
                
                }
          </View>
            
            <View  style={{flex:2,justifyContent:'center'}}>
                <Text style={{textAlign:'center'}}>{title}</Text>
            </View>
            <View  style={{flex:1}}></View>
         </View>
    )
}

const styles = StyleSheet.create({})

export default CustomHeader;