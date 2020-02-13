import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

class J1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <QRCode
                    value="https://www.leprogres.fr/"
                    logo={{ uri: 'http://romualdpetit.fr/wp-content/uploads/2017/06/logo-le-progres-340px.png' }}
                    logoSize={50}
                    size={400}
                />
            </View>
        );
    }
}

export default J1;