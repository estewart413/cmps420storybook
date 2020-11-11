import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default class Page_1 extends React.Component {
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
            source={require("../Assets/Page_1StockPic.jpg")}
            //resizeMode="contain"
            style={{ flex: 1, width: null, height: null }}
          ></ImageBackground>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 60}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Page_4")}>
            <Image source={require('../Assets/Prev.png')}
            style={{height: 50, width: 50}}></Image>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Main")}>
            <Image source={require('../Assets/Next.png')}
            style={{height: 50, width: 50, marginLeft: 625}}></Image>
            
          </TouchableOpacity>
          
        </View>
        <View style={{ padding: 20, flexDirection: "row-reverse" }}>
          <TouchableOpacity>
            <Image
              source={require("../Assets/Pause.png")}
              style={{
                height: 50,
                width: 50,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../Assets/Play2.png")}
              style={{ height: 51, width: 51 }}
            />
            
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../Assets/VolumeFull.png")}
              style={{
                height: 50,
                width: 50,
                marginRight: 540
              }}
            />
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
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "blue",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
  },
});
