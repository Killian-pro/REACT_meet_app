import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import J1 from "./j1";

class home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navigate  = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.getStartedText}> NEWS PAPER QRCODE</Text>
                </View>
                <View style={styles.getStartedContainer}>
                </View>
                <View style={styles.containermid}>
                    <Text >Ceci est le lien 1</Text>

                    <TouchableOpacity style={styles.buttonStyles} onPress={() => navigate("J1") } >
                        <Text style={styles.buttonText} >LIEN 1 </Text>
                    </TouchableOpacity>
                    <Text >Ceci est le lien 2</Text>
                    <TouchableOpacity style={styles.buttonStyles} >
                        <Text style={styles.buttonText}>LIEN 2</Text>
                    </TouchableOpacity>
                    <Text >Ceci est le lien 3</Text>
                    <TouchableOpacity style={styles.buttonStyles} >
                        <Text style={styles.buttonText}>LIEN 3</Text>
                    </TouchableOpacity>
                    <Text >Ceci est le lien 4</Text>
                    <TouchableOpacity style={styles.buttonStyles} >
                        <Text style={styles.buttonText}>LIEN 4</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
        
    }
    
}


export default home;

const styles = StyleSheet.create({

    containermid:
    {
        display:'flex',
        flexDirection:'column',
        height:'100%',
        paddingTop: 100,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyles: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        padding :20,
    },

});