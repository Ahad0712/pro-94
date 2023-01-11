import React, {Component} from "react"
import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native"

export default class LoginScreen extends Component{

  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
      click:false
    }

  }

  onLogin(){
  this.props.navigation.navigate("HomeScreen")
  }

  render(){
    return(
      <View style={styles.container}>

      <Image source={require("../assets/logo.jpg")}
      style={styles.imagestyle}></Image>
      
      <Text style={styles.apptitle}>Check List</Text>
      
      <TextInput style={styles.inputfornt}
      onChangeText={(username)=>this.setState({username})}
      placeholder={"username"}
      placeholderTextColor="black"></TextInput>
      
      <TextInput style={styles.inputfornt}
      onChangeText={(password)=>this.setState({password})}
      placeholder={"password"}
      placeholderTextColor="black"
      secureTextEntry={true}></TextInput>
      
      <TouchableOpacity style={styles.submitButton}
      onPress={()=>this.onLogin()}>
      <Text style={styles.submitText}> Login </Text></TouchableOpacity>
      
      </View>

    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },

  apptitle:{
    fontFamily:"",
    fontSize:20,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  },

  inputfornt:{
    height:40,
    marginTop:40,
    borderWidth:2,
    borderRadius:10,
    borderColor:"blue",
    justifyContent:"center",
    textAlign:"center"
  },
  submitButton:{
    marginTop:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"green",
    width:100,
    height:50,
    marginLeft:120,
  },

  submitText:{
    color:"white"
  },
  imagestyle:{
    justifyContent:"center",
    alignContent:"center",
    marginLeft:50
  }
})
