import react from "react";
import {View,Text,StyleSheet} from 'react-native'

export default function Home() {
    return (
        <View style={styles.container} >
            <Text> Man Hinh About </Text>
        </View>
    );
}   

const styles = StyleSheet.create({
    container: {
        padding:24,
    }   
});