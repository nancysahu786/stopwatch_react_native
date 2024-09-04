
import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

interface buttonDataType{
    title:string,
    color:string,
    background:string
}
const RoundButton = ({title,color,background}:buttonDataType)=>{
    return (
  <TouchableOpacity style={[style.button,{backgroundColor:background}]}>
    <View style={style.buttonBorder}>
    <Text style={[style.buttonTitle,{color}]}>{title}</Text>
    </View>
  </TouchableOpacity>
    );

}

const style = StyleSheet.create({
    button:{
        width:80,
        height:80,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTitle:{
        fontSize:18
    },
    buttonBorder:{
        width:75,
        height:75,
        borderRadius:35,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default RoundButton;