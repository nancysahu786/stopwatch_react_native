import moment from "moment";
import React, { useState } from "react";
import { View,StyleSheet ,Text} from "react-native";
import RoundButton from "../Button/RoundButton";
import LapsTable from "../Lap/Laps";

const TimerComponent = () => {

    interface statesTypes {
        start:number,
        now:any,
        laps:any
    }

    const Data = {
  
        start:0,
        now:0,
        laps:[]
    }

    const [state,setState] = useState<statesTypes>({
        start:0,
        now:0,
        laps:[]
    }
        
    )
    
    const ButtonsRow = ({children}:any) => {
        return <View style={style.buttonRow}>{children}</View>
    }

    let timer:any = state.now - state.start;

    const Start = ()=>{
        console.log("timer",timer);
        const now = new Date().getTime();
        setState({
            start:now,
            now,
            laps:[0]
        })
        timer = setInterval(() => {
            setState(prevState => ({
                ...prevState,
                now: new Date().getTime()
            }));
        }, 100);

        console.log("timer",timer);
        
    }
    const Reset = ()=>{
        
    }
    return(
        <View style={style.container}>
            <Timer  interval={timer} style={style.timer}/>
            <ButtonsRow>
            <RoundButton title="Reset" color="#FFFFFF" background="#3D3D3D" onPress={() => Reset} disabled={false}/>
            <RoundButton title="Start" color="#50D167" background="#1B361F" onPress={() => Start} disabled={false}/>
            </ButtonsRow>
            <LapsTable laps={state.laps}/>
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