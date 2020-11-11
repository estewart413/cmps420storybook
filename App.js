import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Screens/Main";
import Page_1 from "./Screens/Page_1";
import Page_2 from "./Screens/Page_2";
import Page_3 from "./Screens/Page_3";
import Page_4 from "./Screens/Page_4";
import Page_5 from "./Screens/Page_5";



const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator     
        screenOptions={{
                headerShown: false
          }}>
          <Stack.Screen
            name="Main"
            component={Main}
          />
          <Stack.Screen
            name="Page_1"
            component={Page_1}
          />
              <Stack.Screen
            name="Page_2"
            component={Page_2}
          />
              <Stack.Screen
            name="Page_3"
            component={Page_3}
          />
              <Stack.Screen
            name="Page_4"
            component={Page_4}
          />
              <Stack.Screen
            name="Page_5"
            component={Page_5}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;
