import React, { useState, useEffect } from 'react';
import { View,StyleSheet,Text,TouchableOpacity,TextInput, Button ,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons'; 


const AddDocument=(props)=>{
    const [selectImg,setSelectImg]=useState(null);
    const openImage= async()=>{
        const permission=await ImagePicker.requestCameraRollPermissionsAsync();
        if(permission.granted===false){
            return;
        }
        const picker=await ImagePicker.launchImageLibraryAsync();
       // const a=await ImagePicker.launchCameraAsync();
        if(picker.cancelled===true){
            return;
        }
        setSelectImg({localuri:picker.uri})
        console.log(picker);
        //console.log(picker.name);

    }

    const takeImage= async()=>{
        const permission=await ImagePicker.requestCameraRollPermissionsAsync();
        if(permission.granted===false){
            return;
        }
        const picker=await ImagePicker.launchCameraAsync();
       // const a=await ImagePicker.launchCameraAsync();
        if(picker.cancelled===true){
            return;
        }
        setSelectImg({localuri:picker.uri})
        //console.log(picker);
       

    }
    if(selectImg!==null){
        return (
            <View style={styles.container}>
                <Image 
                style={styles.image} 
                source={{uri:selectImg.localuri}}/> 
                 <TouchableOpacity style={styles.appButtonContainer} >
                    <Text style={styles.appButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
    return(
        <View style={styles.container}> 
    
        <Text>Document Screen</Text>
        <View style={{flex:2,flexDirection:'row'}}>
            <TouchableOpacity
             onPress={openImage}
             style={styles.button}>
                <Text>Upload</Text>
                <Feather name="upload" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
             onPress={takeImage}
             style={styles.button}>
                <Text>Take Photo</Text>
                <Feather name="camera" size={24} color="black" />
            </TouchableOpacity>

            
        </View>
        <TouchableOpacity style={styles.appButtonContainer} >
                 <Text style={styles.appButtonText}>Save</Text>
        </TouchableOpacity>
            
           
        </View>
    );
}

const styles=StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        borderRadius:10,
        height:150,
        width:150,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginTop:30
    },
    image:{
       width:300,
        height:300,
        marginTop:50,
        marginLeft:20,
        resizeMode:'contain'
    },
    appButtonContainer: {
        backgroundColor: "#ffd700",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:300,
        marginBottom:200,
        marginTop:100
        

      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        
      }
});

export default AddDocument;


