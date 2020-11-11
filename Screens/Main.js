import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import * as ScreenOrientation from 'expo-screen-orientation';

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

export default class Main extends React.Component {
    
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <ImageBackground
            source={require("../Assets/MainPic.jpg")}
            //resizeMode="contain"
            style={{ flex: 1, width: null, height: null }}
          ></ImageBackground>
        </View>
        <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text style={styles.text}>This is the Main Page</Text>
        </View>
        <View style={{alignItems: 'center', padding: 20}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Page_1")}
        >
          <Text
            style={[
              {
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
                fontSize: 18,
                fontFamily: 'serif'
              },
            ]}
          >
            Begin here
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    height: 40,
    width: 130,
    padding: 5,
    paddingBottom: 5,
    backgroundColor: '#983628',
    borderRadius: 20,
    marginBottom: 70
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'serif'
  },
});
