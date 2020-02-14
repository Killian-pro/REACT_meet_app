/*       PAGE 2                 */
import Icon from "react-native-vector-icons/Ionicons";
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
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { render } from 'react-dom';
const { width } = Dimensions.get('window');

class LinksScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      return <Icon name="md-checkmark-circle" size={32} />;
    },
    title:'',
  };
      

  render() {
    return (

      <ScrollView style={styles.container}>
        {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
        <View style={styles.middle}>
          <Image
            style={{ width: 260, height: 460, borderRadius: 10, borderWidth: 2, borderColor: '#d6d7da', }}
            source={{
              uri:
                'https://images.squarespace-cdn.com/content/v1/5707c9364c2f85d0ea64d6ee/1556876137957-ZH42SNZQ1O22841KW65Z/ke17ZwdGBToddI8pDm48kPePpgDTqOtKKJL-kU_xGh57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmzRdow2MKoDNGJuOcT_AGWZq599FnFQhqbMehYAnimmrbg-o3pcAxP2M2-E3Bn8OS/azamat-zhanisov-1287684-unsplash.jpg',
            }}
          />
        </View>
        <View style={styles.logomid} >
          <TouchableOpacity onPress={() => { alert('Dislike'); }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri:
                  'data:image/jpeg;base64,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',
              }}
            />
          </TouchableOpacity>
          {/* <Image
            style={{ width: 50, height: 50, marginLeft: 80 }}
            source={{
              uri:
                'http://assistancecloud.sfrbusinessteam.fr/newversion/wordpress/wp-content/uploads/2019/04/down.png',
            }}
          /> */}
          <TouchableOpacity onPress={() => { alert('Like'); }}>
            <Image
              style={{ width: 50, height: 50, marginLeft: 150 }}
              source={{
                uri:
                  'http://www.metaptitude.fr/wp-content/uploads/2016/05/Like-vert.png'
              }}
            />

          </TouchableOpacity>
        </View>
      </ScrollView >
    );
  }
}
export default LinksScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  middle: {
    paddingLeft: 80,
    paddingTop: 100,
    flexDirection: 'row',

  },
  logomid:
  {

    paddingTop: 120,
    flexDirection: 'row',
    paddingLeft: 80,


  },
});
