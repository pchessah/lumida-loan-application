import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoanPage from "../features/Loan/LoanPage";
import LoanListScreen from "../features/Loan/LoanListScreen";

import { Dimensions } from "react-native";
import Navbar from "../elements/Navbar";
import HomePage from "../features/Home/Home";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const isMobile = Dimensions.get("window").width < 768;

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      {isMobile ? (
        <Drawer.Navigator
          screenOptions={{
            headerShown: true,
            drawerType: "front",
          }}
        >
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="Apply for Loan" component={LoanPage} />
          <Drawer.Screen name="Loan List" component={LoanListScreen} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            header: () => <Navbar />,
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Apply for Loan" component={LoanPage} />
          <Stack.Screen name="Loan List" component={LoanListScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainStackNavigator;
