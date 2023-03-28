import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  FlatList, c
} from 'react-native';
import Task from './components/Task';
import HeadCounter from './components/HeadCounter';
import BottomInput from './components/BottomInput';


const App = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(list.length);

  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }

  const saveTask = (name) => {
    list.unshift(name);
    setList(list);
    setCount(count + 1);
  }

  const deleteTask = (name) => {
    let index;
    for (index = 0; index < list.length; index++) {
      if (list[index] == name) {
        break;
      }
    }
    list.splice(index, 1);
    setList(list);
    setCount(count + 1);
  }

  const renderTask = (list) => <Task increaseCounter={increaseCount} taskTitle={list.item} decreaseCounter={decreaseCount} deleteTask={deleteTask} />

  return (
    <SafeAreaView style={styles.container}>
      <HeadCounter counter={count} />
      <FlatList
        data={list}
        renderItem={renderTask}
      />
      <BottomInput save={saveTask} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3135',
    justifyContent: 'space-between'
  },
});

export default App;
