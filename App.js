import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Screens/Main";
import PgOne from "./Screens/PgOne";


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
            name="PgOne"
            component={PgOne}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;
