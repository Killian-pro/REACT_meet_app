/*       PAGE 1                  */
import Icon from "react-native-vector-icons/Ionicons";
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      return <Icon name="ios-person" size={32} />;
    },
    title:'',
  };
  constructor(props) {
    super(props)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.middle} >

            <Image source={{ uri: 'http://vince-photo.fr/wp-content/uploads/2019/08/07082018-_DSC1194-e1567198701708.jpg' }} style={{ width: 120, height: 120, borderRadius: 10, borderWidth: 2, borderColor: '#d6d7da', }} />

            {/* <Image
              style={{ width: 120, height: 120, borderRadius: 10, borderWidth: 2, borderColor: '#d6d7da', }}
              source={{
                uri:
                  'http://vince-photo.fr/wp-content/uploads/2019/08/07082018-_DSC1194-e1567198701708.jpg',
              }}
            /> */}

            <Text>Marie AGAAIN</Text>
          </View>

          <View style={styles.logomid} >
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('Reglages')}>
              <Image

                style={{ width: 50, height: 50 }}
                source={{

                  uri:
                    'https://static.vecteezy.com/system/resources/previews/000/387/337/non_2x/black-gear-on-white-background-vector.jpg',
                }}

              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('Profil')}>
              <Image
                style={{ width: 50, height: 50, marginLeft: 120 }}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HSnxCONHGPFGvvO6fI3K-qjyTX_rnm0KMUwURnRdhVxsGBfz&s',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textmid} >
            <Text>Configuration</Text>
            <Text style={{ marginLeft: 110 }}>Profil</Text>
          </View>
          {/* </TouchableOpacity> */}
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen



function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  textmid:
  {
    paddingTop: 10,
    flexDirection: 'row',
    paddingLeft: 80,
  },
  logomid:
  {

    paddingTop: 190,
    flexDirection: 'row',
    paddingLeft: 100,

  },
  middle: {
    alignItems: 'center',
    paddingTop: 90,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
