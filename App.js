import React  from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Alert, Text ,TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/*import { DataTable, TextInput} from 'react-native-paper';



const HomeScreen = ({route, navigation}) => {
  const [price, onChangePrice] = useState("");
  const [discount, onChangeDiscount] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const [memory, setMemory] = useState([]);
  const [id, setId] = useState(1);

}*/
export const HomeScreen=({navigation})=> {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Starting Price</Text>
      <TextInput style={styles.start} keyboardType='number-pad'>$</TextInput>
      <Text  style={styles.text}>Discount</Text>
      <TextInput style={styles.discount}  keyboardType='number-pad'></TextInput>
      <Text  style={styles.text}>Final Price</Text>
      <TextInput style={styles.final}  keyboardType='number-pad'></TextInput>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("SaveData")}}><Text color='#d2dbd7'>Save</Text></TouchableOpacity>
    </View>
  );
}
export const SaveData=({navigation})=>{
  return(
    <Text>Data Saved</Text>
  );

}
const AuthStack= createStackNavigator();

 export default function App () {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="DiscountCalculator" component={HomeScreen}/>
        <AuthStack.Screen name="SaveData" component={SaveData}/>
      
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    alignContent:"center",
  },
  start:{
    fontSize:20,
    padding:50,
    alignSelf:"stretch",
    fontWeight: "bold",
    backgroundColor:"#6acc9b",
    borderRadius:70,
  },
  discount:{
    color:"white",
    fontSize:20,
    padding:50,
    alignSelf:"stretch",
    fontWeight: "bold",
    backgroundColor:"#151615",
    borderRadius:70,
  },
  
  final:{
    fontSize:20,
    padding:50,
    alignSelf:"stretch",
    fontWeight: "bold",
    backgroundColor:"#6acc9b",
    borderRadius:70,
  },
  text:{
    fontSize:20,
    paddingLeft:150,
    alignSelf:"stretch",
    fontWeight: "bold",
  },
  button:{
    marginRight:50,
    marginTop:20,
    alignSelf:'flex-end',
    padding:10,
    borderRadius:10,
    width:100,
    backgroundColor:"#6acc9b",
  }
})