/*       PAGE 1.1                */
import React, { Component } from 'react';
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
    Picker,
    TextInput,
    Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';



class Profil extends Component {

    constructor(props) {
        super(props)
        this.state = { user: '', desc: '', image: 'http://vince-photo.fr/wp-content/uploads/2019/08/07082018-_DSC1194-e1567198701708.jpg', }
    }
    updateUser = (user) => {
        this.setState({ user: user })
    }
    updatedesc = (desc) => {
        this.setState({ desc: desc })
    }

    render() {
        let { image } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Mon profil</Text>

                <View style={styles.image}>
                    <TouchableOpacity onPress={this._pickImage}>
                        {image &&
                            <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 10, borderWidth: 2, borderColor: '#d6d7da', }} />}
                    </TouchableOpacity>
                    {/* <Image
                        style={{ width: 120, height: 120, borderRadius: 10, borderWidth: 2, borderColor: '#d6d7da', }}
                        source={{
                            uri:
                                'http://vince-photo.fr/wp-content/uploads/2019/08/07082018-_DSC1194-e1567198701708.jpg',
                        }}
                    /> */}


                </View>
                <View style={styles.hauteurcenter}>
                    <Text style={styles.title}>JE SUIS</Text>
                    <View style={styles.list}>
                        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                            <Picker.Item label="HOMME" value="HOMME" />
                            <Picker.Item label="FEMME" value="FEMME" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.hauteurcenter}>
                    <Text style={styles.title}>Description</Text>
                    <View style={styles.description}>
                        <TextInput
                            selectedValue={this.state.desc} onValueChange={this.updatedesc}
                            editable
                            maxLength={400}
                            multiline={true}
                            // numberOfLines={5}
                            style={{ width: 300, height: 200, textAlignVertical: 'top', margin: '5%' }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigate('Home')}
                        style={{ backgroundColor: 'black' }}>
                        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        );
    }
    componentDidMount() {
        this.getPermissionAsync();
        console.log('PERMISSION GET');
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        if (!result.cancelled) {
            console.log(result.uri)
            this.setState({ image: result.uri });
        }
    };


}
export default Profil



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    text: {
        flex: 1,
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor: '#fff',
        textAlign: 'center',
        backgroundColor: '#C0C0C0',
        fontWeight: 'bold',
        fontSize: 30,

    },
    title: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
        paddingBottom: 5,
    },
    middle: {

        paddingTop: 100,
        flexDirection: 'row',

    },
    logomid:
    {

        paddingTop: 120,
        flexDirection: 'row',
        paddingLeft: 60,

    },
    row:
    {
        paddingLeft: 170,
        flexDirection: 'row',
    },
    hauteurcenter:
    {
        paddingTop: 50,
    },
    image:
    {
        paddingTop: 50,
        alignItems: 'center',
    },
    list:
    {
        paddingLeft: '40%',
    },
    description:
    {
        backgroundColor: '#C8C8C8',
        borderRadius: 5,
        margin: '5%',
    }
});
