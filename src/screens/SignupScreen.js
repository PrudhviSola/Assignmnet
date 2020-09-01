import React, { useState } from 'react';
import { View,StyleSheet,Text,TextInput,TouchableOpacity } from 'react-native';


const SignupScreen=()=>{
const [password,setPassword]=useState('');
const [c_password,setCPassword]=useState('');
    return (
        <View style={styles.container}>     
            
            <Text style={{fontSize:20, marginRight:220,fontWeight:'bold'}}>Sign Up</Text>            
            <TextInput style={styles.inputStyle}
             placeholder='Enter email'
             autoCapitalize="none"
             />
             <TextInput style={styles.inputStyle}
             placeholder='Enter Password'
             autoCapitalize="none"
             secureTextEntry={true}
             onChangeText={setPassword}
             />  

             <TextInput style={styles.inputStyle}
             placeholder='ReEnter Password'
             autoCapitalize="none"
             secureTextEntry={true}
             onChangeText={setCPassword}
             />  
               {password!=c_password ? <Text>ReEnter same password</Text> : null}
             
             <TouchableOpacity style={styles.appButtonContainer}>
                 <Text style={styles.appButtonText}>Sign Up</Text>
             </TouchableOpacity>

             
            
        </View>
       
    );
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:50
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

export default SignupScreen;