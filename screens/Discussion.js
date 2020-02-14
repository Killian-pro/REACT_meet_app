/*PAGE 3*/
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

const { width } = Dimensions.get('window');

class LikeScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      return <Icon name="ios-chatbubbles" size={32} />;
    },
    title:'',
  };


  componentDidMount() {
    setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1) // scroll view position fix
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.middle}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20, }}>Nouveau Match</Text>
        </View>
        <ScrollView
          ref={(scrollView) => { this.scrollView = scrollView; }}
          //pagingEnabled={true}
          horizontal={true}
          decelerationRate={5}
        >
          <View style={styles.logomid}>
            <Image
              style={{ width: 120, height: 120, borderRadius: 80, borderWidth: 2, borderColor: '#d6d7da' }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN1nL8nSCI9ffwoDD_zri-9Rxdc_CUJ-6AmMS9opYOgkTWlUb&s',
              }}
            />
            <Image
              style={{ width: 120, height: 120, borderRadius: 80, borderWidth: 2, borderColor: '#d6d7da', }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwQcp6SPNKAJ_wAnINodxYnSGu6L8wJW7mQZc7SduixoCChd3fA&s',
              }}
            />
            <Image
              style={{ width: 120, height: 120, borderRadius: 80, borderWidth: 2, borderColor: '#d6d7da', }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cJ2LzNbabxeAbBAtyBECkmE1EVXnWaTnxirqoaboUN22Vv6Mzg&s',
              }}
            />
            <Image
              style={{ width: 120, height: 120, borderRadius: 80, borderWidth: 2, borderColor: '#d6d7da', }}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQre3uU_004GSSR19kqNkB9ceH-aS_ZExmGfI39v6IykwKIYoHp&s',
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.middle}>
          <Text style={{ paddingTop: 50, fontWeight: 'bold', textAlign: 'center', fontSize: 20, }}>Messages</Text>
        </View>
        <View style={styles.msg}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 2, }}
            source={{
              uri:
                'https://media.istockphoto.com/vectors/paper-plane-line-icon-send-message-outline-vector-logo-illustration-vector-id669740044?k=6&m=669740044&s=170667a&w=0&h=gdBi4HPUh__zBEfzrKfIT8LRXOOIn_SU8DqVMlEfXnI=',
            }}
          />
          <Text style={{ width: 300, height: 80, borderRadius: 20, borderWidth: 1, paddingTop: 25, paddingLeft: 10 }} >test</Text>
        </View>
        <View style={styles.msg}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 2, }}
            source={{
              uri:
                'https://media.istockphoto.com/vectors/paper-plane-line-icon-send-message-outline-vector-logo-illustration-vector-id669740044?k=6&m=669740044&s=170667a&w=0&h=gdBi4HPUh__zBEfzrKfIT8LRXOOIn_SU8DqVMlEfXnI=',
            }}
          />
          <Text style={{ width: 300, height: 80, borderRadius: 20, borderWidth: 1, paddingTop: 25, paddingLeft: 10 }} >test1</Text>
        </View>
        <View style={styles.msg}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 2, }}
            source={{
              uri:
                'https://media.istockphoto.com/vectors/paper-plane-line-icon-send-message-outline-vector-logo-illustration-vector-id669740044?k=6&m=669740044&s=170667a&w=0&h=gdBi4HPUh__zBEfzrKfIT8LRXOOIn_SU8DqVMlEfXnI=',
            }}
          />
          <Text style={{ width: 300, height: 80, borderRadius: 20, borderWidth: 1, paddingTop: 25, paddingLeft: 10 }} >test2</Text>
        </View>
        <View style={styles.msg}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 2, }}
            source={{
              uri:
                'https://media.istockphoto.com/vectors/paper-plane-line-icon-send-message-outline-vector-logo-illustration-vector-id669740044?k=6&m=669740044&s=170667a&w=0&h=gdBi4HPUh__zBEfzrKfIT8LRXOOIn_SU8DqVMlEfXnI=',
            }}
          />
          <Text style={{ width: 300, height: 80, borderRadius: 20, borderWidth: 1, paddingTop: 25, paddingLeft: 10 }} >test3</Text>
        </View>
        <View style={styles.msg}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 2, }}
            source={{
              uri:
                'https://media.istockphoto.com/vectors/paper-plane-line-icon-send-message-outline-vector-logo-illustration-vector-id669740044?k=6&m=669740044&s=170667a&w=0&h=gdBi4HPUh__zBEfzrKfIT8LRXOOIn_SU8DqVMlEfXnI=',
            }}
          />
          <Text style={{ width: 300, height: 80, borderRadius: 20, borderWidth: 1, paddingTop: 25, paddingLeft: 10 }} >test4</Text>
        </View>
        <View style={styles.msg}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 2, }}
            source={{
              uri:
                'https://media.istockphoto.com/vectors/paper-plane-line-icon-send-message-outline-vector-logo-illustration-vector-id669740044?k=6&m=669740044&s=170667a&w=0&h=gdBi4HPUh__zBEfzrKfIT8LRXOOIn_SU8DqVMlEfXnI=',
            }}
          />
          <Text style={{ width: 300, height: 80, borderRadius: 20, borderWidth: 1, paddingTop: 25, paddingLeft: 10 }} >test5</Text>
        </View>
        <View style={styles.msg}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 2, }}
            source={{
              uri:
                'https://media.istockphoto.com/vectors/paper-plane-line-icon-send-message-outline-vector-logo-illustration-vector-id669740044?k=6&m=669740044&s=170667a&w=0&h=gdBi4HPUh__zBEfzrKfIT8LRXOOIn_SU8DqVMlEfXnI=',
            }}
          />
          <Text style={{ width: 300, height: 80, borderRadius: 20, borderWidth: 1, paddingTop: 25, paddingLeft: 10 }} >test6</Text>
        </View>
        <View style={styles.msg}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 2, }}
            source={{
              uri:
                'https://media.istockphoto.com/vectors/paper-plane-line-icon-send-message-outline-vector-logo-illustration-vector-id669740044?k=6&m=669740044&s=170667a&w=0&h=gdBi4HPUh__zBEfzrKfIT8LRXOOIn_SU8DqVMlEfXnI=',
            }}
          />
          <Text style={{ width: 300, height: 80, borderRadius: 20, borderWidth: 1, paddingTop: 25, paddingLeft: 10 }} >test7</Text>
        </View>
      </ScrollView>
    );
  }
}
export default LikeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  middle: {
    textAlign: 'center',
    paddingTop: 5,

  },
  logomid:
  {
    paddingLeft: 10,
    paddingTop: 50,
    flexDirection: 'row',
  },

  msg:
  {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 35,
    flexDirection: 'row',
  },
  view: {
    marginTop: 100,
    backgroundColor: 'blue',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 100,
    backgroundColor: 'red',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
});

