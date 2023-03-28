import React from "react";
import { View, Text } from "react-native";
import styles from "./HeadCounter.styles";

const HeadCounter = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text_and_counter}>YAPILACAKLAR</Text>
            <Text style={styles.text_and_counter}>{props.counter}</Text>
        </View>
    );
}
export default HeadCounter;
