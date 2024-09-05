import React from "react";
import { View ,Text, ScrollView,StyleSheet} from "react-native";
import { Timer } from "../Components/timer";


interface LapsTypes {
    number : number,
    interval:number,
    fastest:any,
    slowest:any
}
const Laps = ({number,interval,fastest,slowest}:LapsTypes) =>{
    const lapStyle = [
        style.lapText,
        fastest && style.fastest,
        slowest && style.slowest
    ]
    return(
   <View style={style.lap}>
    <Text style={lapStyle}>Lap {number}</Text>
   <Timer style={lapStyle} interval={interval} />
   </View>
    );
}

const LapsTable = ({laps}:any) => {
    // console.log("laps",laps);
    const finishedLaps = laps.slice(1);
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    if(finishedLaps.length >= 2){
        finishedLaps.forEach((lap: number) => {
            if(lap < min) min = lap;
            if(lap > max) max = lap;
        });
    }
    
return (
<ScrollView style={style.scrollView}>

    {laps.map((lap: any,index: any) => (
        <Laps key={laps.length - index}
        number={laps.length - index}
        interval={lap} fastest={lap == min} slowest={lap == max} />
    ))}
</ScrollView>
)
}

const style = StyleSheet.create({
lap:{
flexDirection:'row',
justifyContent:'space-between',
borderColor:'#151515',
borderTopWidth:1,
paddingVertical:10,

},
lapText:{
color:'white',
fontSize:18
},
scrollView:{
    alignSelf:'stretch',paddingHorizontal:20
},
fastest:{
    color:'#4BC05F'
},
slowest:{
    color:'#CC3531'
}
});
export default LapsTable;