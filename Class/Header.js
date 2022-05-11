import React  from "react";
import {Text, View, StyleSheet} from "react-native";

export default function Header(){
    return  (
        <View style={styles.header}>
            <Text style={styles.title}> My Todos List </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 60,
        paddingTop: 22,
        backgroundColor: 'coral',
    },
    title:{
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    }
});