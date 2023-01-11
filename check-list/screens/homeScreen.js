import React, {Component} from "react"
import {Text, TouchableOpacity, View, Image, StyleSheet } from "react-native"

import firebase from 'firebase'


export default class HomeScreen extends Component{

  constructor(props){
    super(props); 
    this.state={
      description:"",
      time:""
    }
  }

  listNavigate(){
    this.props.navigation.navigate("ListScreen")
  }

  async displayTask(){
    let des,timeValue
    await firebase.database().ref("/tasks/"+ firebase.auth().currentUser.uid)
    .on("value",function(snapshot){
        des=snapshot.val().description
        timeValue=snapshot.val().time
    })
    this.setState({
      description:des,
      time:timeValue
    })
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.column}>
      <Image style={styles.icon}
      source={require("../assets/logo.jpg")}></Image>
      <Text style={styles.appTitle}> My Check List</Text>
      </View>

      <Text>{"description :"+description}</Text>
      <Text>{"time :"+time}</Text>

      <TouchableOpacity style={styles.lists}
      onPress={()=>this.listNavigate()}>
      <Text style={styles.listsText}> {"Add Check List +"}</Text>
      </TouchableOpacity>

      

      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  icon:{
    width:30,
    height:50,
    margin:5
    // marginLeft:5,
    // marginTop:1
  },
  lists:{
    width:130,
    height:50,
    backgroundColor:"green",
    marginTop:450,
    marginRight:-120,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center"
  },
  listsText:{
    color:"white",
    fontSize:15,
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center"
  },
  appTitle:{
    fontSize:30,
    marginTop:1,
    marginLeft:50,
  },
  column:{
    flexDirection:'column'
  }
})

