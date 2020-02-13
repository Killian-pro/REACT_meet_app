import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";

class home extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("J1")}>
                <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </View >
           
    );
    }
}

export default home;