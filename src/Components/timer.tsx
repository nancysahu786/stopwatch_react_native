import moment from "moment";
import React from "react";
import { View,StyleSheet ,Text} from "react-native";
import RoundButton from "../Button/RoundButton";
import LapsTable from "../Lap/Laps";

const TimerComponent = () => {

    const Data = {
        timer:123456789,
        laps:[1234,2365,345,2386,4556]
    }
    
    const ButtonsRow = ({children}:any) => {
        return <View style={style.buttonRow}>{children}</View>
    }
    return(
        <View style={style.container}>
            <Timer  interval={Data.timer} style={style.timer}/>
            <ButtonsRow>
            <RoundButton title="Reset" color="#FFFFFF" background="#3D3D3D"/>
            <RoundButton title="Start" color="#50D167" background="#1B361F"/>
            </ButtonsRow>
            <LapsTable laps={Data.laps}/>
        </View>
    );
}

const Timer = ({interval,style}:any)=>{
    const duration = moment.duration(interval);
    const centimilisecond = Math.floor(duration.milliseconds() / 10);
   return (<Text style={style}>{duration.minutes()}:{duration.seconds()}:{centimilisecond}</Text>)
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems:'center',
       paddingTop:"60%",
       paddingHorizontal:20
      },
      timer:
      {
        color:'white',
        fontSize:59,
        padding:20,
      },
      buttonRow:{
        flexDirection:'row',
        alignSelf:'stretch',
        justifyContent:'space-between',
        marginTop:80,
        marginBottom:30
      }
})

export {TimerComponent ,Timer};