import React from "react";
import { View ,Text, ScrollView,StyleSheet} from "react-native";
import { Timer } from "../Components/timer";


interface LapsTypes {
    number : number,
    interval:number
}
const Laps = ({number,interval}:LapsTypes) =>{
    return(
   <View style={style.lap}>
    <Text style={style.lapText}>Lap {number}</Text>
   <Timer style={style.lapText} interval={interval} />
   </View>
    );
}

const LapsTable = ({laps}:any) => {
    // console.log("laps",laps);
    
return (
<ScrollView style={style.scrollView}>

    {laps.map((lap: any,index: any) => (
        <Laps key={laps.length - index} 
        number={laps.length - index}
         interval={lap} />
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
}
});
export default LapsTable;