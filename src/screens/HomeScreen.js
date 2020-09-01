import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity,TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const HomeScreen=(props)=>{

    return (
        <View style={styles.container}>     
            <View style={styles.subview}>
                <View style={styles.subview2}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('AddPart')}>
                        <Text style={{color:'blue'}}>Add parts</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.subview2}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('AddDocument')}>
                        <Text style={{color:'blue'}}>Add Document</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.subview}>        
                <View style={styles.subview2}>
                    <Text>Part 3</Text>
                </View>
                <View style={styles.subview2}>
                    <Text>Part 4</Text>
                    <MaterialIcons size={40} name="people"/>
                </View>
            </View>
           
        </View>
       
    );
}

const styles=StyleSheet.create({
    container: {
        flex:1,
       // backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:50
        
    },
    subview:{
        flex:1,
        //backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    subview2:{
        flex:1,
        //backgroundColor:'white',
        borderColor:'black',
       //borderWidth:1, 
       
        alignItems:'center',
        justifyContent:'center',
        
        marginRight:20,
        marginLeft:20
    },
    inputStyle:{
        width:300,
        height: 40,
        borderWidth: 2,
        borderRadius:5,
        margin:10,
        padding:10               
    },
    
      loginView:{
          flexDirection:'row',                
      },
      appButtonContainer: {
     
        backgroundColor: "#ffd700",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:300,
        marginTop:50

      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        
      }

      
})

export default HomeScreen;