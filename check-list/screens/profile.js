import React,{Component} from 'react'
import {View, Image, Text, Switch, StyleSheet} from 'react-native'

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            first_name:"",
            light_theme:true,
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("../assets/logo.png")}
                style={styles.iconImage}></Image>

                <Text style={styles.appTitle}>Check List</Text>

                <View style={styles.screenContainer}>
                    <Text style={styles.nameText}>
                        {this.state.first_name}
                    </Text>

                    <Text style={styles.themeText}>Dark Theme</Text>

                    <Switch 
                    style={{transform:[{scaleX:1.3},{scaleY:1.3}]}}
                    trackColor={{
                        false:"black",
                        true:"white"
                    }}
                    thumbColor={this.state.isenable()}></Switch>
                </View>
            </View>
        )
    }
}
