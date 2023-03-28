import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import styles from './BottomInput.styles';

const BottomInput = (props) => {
    const [inputValue, setInputValue] = useState("");

    const onPressHandler = () => {
        props.save(inputValue);
        setInputValue("");
    }

    return (
        <View style={styles.container}>

            <TextInput placeholder="Yapilacak..." style={styles.Input_container} value={inputValue} onChangeText={setInputValue} />

            <TouchableOpacity style={styles.Button_container} onPress={onPressHandler}>
                <Text style={styles.SaveText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
}
export default BottomInput;