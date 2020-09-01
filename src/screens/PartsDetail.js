import React, { useState } from 'react';
import { View,StyleSheet,Text,TouchableOpacity,TextInput,BUttom, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

const PartsDetail=(props)=>{
    const  data =props.navigation.state.params.obj;
    //const num=data.locations.chennai;
    //Need to change this to dynamic one
    const [counter,setCounter]=useState({Chennai:data.locations.Chennai,Banglore:data.locations.Banglore})
    
    

    //console.log(counter.Banglore)
    // for (var key of Object.keys(data.locations)) {
    //     console.log(key + " -> " + data.locations[key])
    // }
    const updatecounter=()=>{

    }

    return (
        <View style={styles.viewStyle}>     
            
            <Text style={{fontSize:24}}>{data.title}</Text> 
            <View style={styles.subView}>
                <View style={{flexDirection:'row',marginRight:20,marginBottom:20}}>
                    <Text style={{fontSize:18}}>Category - {data.Category}</Text>
                    <View style={{flexDirection:'row-reverse',flex:1}}>
                    <Text style={{fontSize:18}}>UPC - {data.UPC}</Text>
                    </View>
                    
                </View> 
                <View style={{flexDirection:'row',marginRight:20,marginBottom:100}}>
                    <Text style={{fontSize:18}}>Manufacturer - {data.Manufacturer}</Text>
                    <View style={{flexDirection:'row-reverse',flex:1}}>
                    <Text style={{fontSize:18}}>Cost - {data.Cost}</Text>
                    </View>
                    
                </View> 
            </View>
           
            <View>{Object.entries(data.locations).map(([key,value])=>{
                return(
                    <View key ={key} style={{flexDirection:'row',marginTop:20}}>                 
                <Text style={styles.textStyle}>{key}</Text>
                <TouchableOpacity onPress={()=>{setCounter({...counter,[key]:counter[key]-1})}}>
                <AntDesign name="minuscircle" size={30} />
                </TouchableOpacity>
                    <Text style={{fontSize:22,paddingLeft:10,paddingRight:10}} >{counter[key]}</Text>
                
                <TouchableOpacity style={{marginRight:10}}  onPress={()=>{setCounter({...counter,[key]:counter[key]+1})}}>
                <AntDesign name="pluscircle" size={30} color="black" />
                </TouchableOpacity> 
            </View>
                );
            })}</View>
            
  
            {/* <View style={{flexDirection:'row',marginTop:100}}>                 
                <Text style={styles.textStyle}>chennai</Text>
                <TouchableOpacity onPress={()=>{setCounter(counter-1)}}>
                <AntDesign name="minuscircle" size={30} />
                </TouchableOpacity>
                    <Text style={{fontSize:22,paddingLeft:10,paddingRight:10}} >{counter}</Text>
                <TouchableOpacity style={{marginRight:10}} onPress={()=>{setCounter(counter+1)}}>
                <AntDesign name="pluscircle" size={30} color="black" />
                </TouchableOpacity> 
            </View> */}
            
           
        </View>
       
    );
}

const styles=StyleSheet.create({
    viewStyle:{
        justifyContent:"space-evenly",
        marginLeft:20,
       // marginEnd:50
        
    },
    subView:{
        marginTop:200,
        fontWeight:'bold'
    },
    
    textStyle:{
        fontSize:20,
        justifyContent:'flex-start',
        flex:1,
        marginLeft:10,
        marginRight:20
    }
         
})

export default PartsDetail;