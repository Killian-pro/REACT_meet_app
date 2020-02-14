/*       PAGE 1.1                */
import React, { Component } from 'react';
import { RadioButton } from 'react-native-paper'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    View,
    Slider,

} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { render } from 'react-dom';
const { width } = Dimensions.get('window');

class Reglages extends Component {

    static navigationOptions = {

    };
    state = {
        checked: 'first',
    };
    constructor(props) {
        super(props)
        this.state = {
            distance: 30,
            minDistance: 10,
            maxDistance: 100,

            age: 20,
            minage: 18,
            maxage: 99,
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { checked } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Mes Préférences</Text>
                <Slider
                    style={{ width: 300 }}
                    step={1}
                    minimumValue={this.state.minDistance}
                    maximumValue={this.state.maxDistance}
                    value={this.state.distance}
                    onValueChange={val => this.setState({ distance: val })}
                    thumbTintColor='rgb(252, 228, 149)'
                    maximumTrackTintColor='#d3d3d3'
                    minimumTrackTintColor='rgb(252, 228, 149)'
                />
                <View style={styles.textCon}>
                    <Text style={styles.colorGrey}>{this.state.minDistance} km</Text>
                    <Text style={styles.colorYellow}>
                        {this.state.distance + 'km'}
                    </Text>
                    <Text style={styles.colorGrey}>{this.state.maxDistance} km</Text>
                </View>
                <View style={styles.menu}>
                    <Slider
                        style={{ width: 300 }}
                        step={1}
                        minimumValue={this.state.minage}
                        maximumValue={this.state.maxage}
                        value={this.state.age}
                        onValueChange={val => this.setState({ age: val })}
                        thumbTintColor='rgb(252, 228, 149)'
                        maximumTrackTintColor='#d3d3d3'
                        minimumTrackTintColor='rgb(252, 228, 149)'
                    />
                    <View style={styles.textCon}>
                        <Text style={styles.colorGrey}>{this.state.minage} ans</Text>
                        <Text style={styles.colorYellow}>
                            {this.state.age + ' ans'}
                        </Text>
                        <Text style={styles.colorGrey}>{this.state.maxage} ans</Text>
                    </View>
                </View>
                <Text style={styles.textbouton}>Sexes</Text>
                <View style={styles.sexes}>
                    <Text style={{ color: "#fff" }}>M</Text>
                    <Text style={{ color: "#fff" }}>F</Text>
                </View>
                <View style={styles.menubouton}>

                    <RadioButton
                        color='#fff'
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'first' }); }}
                    />
                    <RadioButton
                        color='#fff'
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'second' }); }}
                    />

                </View>
                <TouchableOpacity
                    onPress={() => navigate('Home')}
                    style={{ backgroundColor: 'black' }}>
                    <Text style={{ paddingTop:30,fontSize: 20, color: '#fff', textAlign: 'center' }}>Confirm</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Reglages


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    textCon: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorGrey: {
        color: '#d3d3d3'
    },
    colorYellow: {
        color: 'rgb(252, 228, 149)'
    },
    title: {
        backgroundColor: '#000',
        paddingTop: 50,
        paddingBottom: 150,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        width: 250

    },
    menu: {
        paddingTop: 100
    },
    menubouton: {
        backgroundColor: '#808080',
        flexDirection: 'row',
        borderRadius: 50,
        width: 100,
        justifyContent: 'space-between',

    },
    textbouton: {
        paddingTop: 100,
        color: '#ffffff',
        paddingBottom: 20,

    },
    sexes: {
        paddingTop: 10,
        flexDirection: 'row',
        width: 70,
        justifyContent: 'space-between',
    }

});
