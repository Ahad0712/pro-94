import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      time: '',
    };
  }

  addTask(task, time) {
    firebase.database().ref("/tasks/"+currentUser.uid)
    .set({
      description:task,
      time:time
    })
  }

  backNavigate() {
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.add}
          onPress={() => this.addTask(task, time)}>
          <Text style={styles.addText}>Add Task</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.taskinput}
          onChangeText={(task) => this.setState({ task })}
          placeholder={'Enter task'}></TextInput>
        <TextInput
          style={styles.taskinput}
          onChangeText={(time) => this.setState({ time })}
          placeholder={'Enter time'}></TextInput>

        <TouchableOpacity
          style={styles.back}
          onPress={() => this.backNavigate()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskinput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    marginTop: 40,
  },
  add: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    backgroundColor: 'green',
    marginTop: 10,
    alignSelf: 'center',
    marginLeft: 265,
  },
  addText: {
    color: 'black',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  back: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    backgroundColor: 'red',
    marginTop: 100,
  },
  backText: {
    color: 'black',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
