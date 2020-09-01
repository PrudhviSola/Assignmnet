import React ,{useState} from 'react';
import { View,StyleSheet,Text,TouchableOpacity,TextInput,BUttom, Button,ScrollView,StatusBar,SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-gesture-handler';
import PartsDetail from './PartsDetail';
import { ListItem } from 'react-native-elements'

//Defining static data for demo

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Heavy tyres",
      number:20,
      subtitle:"Tyre",
      Category:"electrical",
      UPC:"0987654321",
      Manufacturer:"Extravision",
      Cost:"50$",
      locations:{
        Banglore:50,
        Chennai:25
      }
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Two wheeler tube",
      number:25,
      subtitle:"Tube",
      Category:"electrical",
      UPC:"0987654322",
      Manufacturer:"Extravision",
      Cost:"60$",
      locations:{
        Banglore:51,
        Chennai:26
      }
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Break pads",
      number:26,
      subtitle:"Break",
      Category:"electrical",
      UPC:"0987654323",
      Manufacturer:"Extravision",
      Cost:"70$",
      locations:{
          Banglore:52,
          Chennai:27   
    }
    },
  ];
  
  
 
  
  const AddParts = (props) => {

     //Extra code
     {/*
    const [selectedId, setSelectedId] = useState(null);
 
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";  
      return (
      <TouchableOpacity onPress={() => props.navigation.navigate('PartsDetail',{userid:item.id})} style={[styles.item, {backgroundColor}]}>
        <View >
           
           <Text>{item.title}</Text> 
            <Text>{item.subtitle}</Text>
        </View>
        
            <View style={{justifyContent:'flex-end',flex:1,flexDirection:'row'}}>
            <Text >{item.number}</Text>
            </View>
            
       </TouchableOpacity>
      }
        
      );
    };
  */}

    return (
      <ScrollView style={styles.container}>
      {
        DATA.map((item, i) => {
          return (
            <ListItem
              key={i}
              chevron
              bottomDivider
              title={item.title}
              subtitle={
                  <View style={styles.subtitleView}>   
                    <Text>{item.subtitle}</Text>
                    <View style={{flex:1,flexDirection:'row-reverse'}}>
                    <Text >{item.number}</Text>
                    </View>
                    
                </View>
            }
            style={styles.listStyle}             
              onPress={() => {
                props.navigation.navigate('PartsDetail', {
                  obj:{title:item.title,
                    number:item.number,
                    subtitle:item.subtitle,
                    Category:item.Category,
                    UPC:item.UPC,
                    Manufacturer:item.Manufacturer,
                    Cost:item.Cost,
                    locations:item.locations
                  }
                });
              }}/>
          );
        })
      }
    </ScrollView>
    );
  };
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      
    },
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5,
      
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    listStyle:{
      marginBottom:20,
      marginRight:20,
      marginLeft:20,
     
      
      
    }
  });

export default AddParts;