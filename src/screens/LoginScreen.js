import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity,TextInput,BUttom, Button } from 'react-native';


const LoginScreen=(props)=>{

    return (
        <View style={styles.container}>     
            
            <Text style={{fontSize:20, marginRight:220,fontWeight:'bold'}}>Sign in</Text>            
            <TextInput style={styles.inputStyle}
             placeholder='Enter email'
             autoCapitalize="none"
             />
             <TextInput style={styles.inputStyle}
             placeholder='Enter Password'
             autoCapitalize="none"
             secureTextEntry={true}
             />   
             <TouchableOpacity style={styles.appButtonContainer} onPress={()=>{props.navigation.navigate('Home')}}>
                 <Text style={styles.appButtonText}>Sign In</Text>
             </TouchableOpacity>

            
            <Text >Forgot Password</Text>                      
            <View style={styles.loginView}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity  onPress={()=>props.navigation.navigate('Signup')}>
                    <Text style={{color:'blue'}}> Signup</Text>
                </TouchableOpacity>
            </View>
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

export default LoginScreen;