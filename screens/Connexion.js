/*       PAGE Connexion                */
import React, { Component } from 'react';
import { RadioButton } from 'react-native-paper'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    View,
    Button,

} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { render } from 'react-dom';
const { width } = Dimensions.get('window');

class Connexions extends Component {

    static navigationOptions = {

    };
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            user: 'kiki',
            mdp: 'test',

        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.principal}>
                <Text style={styles.title}>Kip's APP</Text>
                <View style={styles.container}>
                    <TextInput
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                        placeholder={'Username'}
                        style={styles.input}
                        underlineColorAndroid="white"
                        autoCapitalize="none"
                        placeholderTextColor="white"

                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input}
                        underlineColorAndroid="white"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                    />


                </View>

                <Button
                    title="Login"
                    width="100%"
                    height={50}
                    color="#008000"
                    alignItems="center"
                    justifyContent="center"

                    onPress={() => { this.fct() }}
                />

            </View>
        );
    }
    fct() {
        if (this.state.username == this.state.user && this.state.password == this.state.mdp) {
            console.log('CONNECT')
            this.props.navigation.navigate('Home');
        }
        else
        {
            alert('TRY AGAIN')
            this.setState({ username:'' });
            this.setState({ password:'' });
        
        }
    }
}


export default Connexions


const styles = StyleSheet.create({
    title: {
        backgroundColor: '#000',
        paddingTop: 100,
        paddingBottom: 150,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        width: 250
    },
    principal: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        // backgroundColor: '#ecf0f1',
    },
    input: {
        margin: 15,
        width: 200,
        height: 40,
        fontSize: 13,
        color: "white"
    },
    loginTitle: {
        marginBottom: 50,
        width: 180,
        fontSize: 17,
        color: "white",
        textAlign: "center"
    },
});
