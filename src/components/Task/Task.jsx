import React, { useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Task.styles'


const Task = (props) => {
    const [flag, setFlag] = useState(false);
    const changeFlag = () => {

        if (flag == true) {
            props.increaseCounter();
            setFlag(false);
        } else {
            props.decreaseCounter();
            setFlag(true);
        }

    }

    const delTask = () => {
        props.deleteTask(props.taskTitle);
        props.decreaseCounter();
    }


    return (
        <TouchableOpacity style={flag ? styles.container_Flag1 : styles.container} onPress={changeFlag} onLongPress={delTask}>
            <Text style={flag ? styles.text_Flag1 : styles.text}>{props.taskTitle}</Text>
        </TouchableOpacity>
    );
}
export default Task;