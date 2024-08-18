import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoanPage from "../features/Loan/LoanPage";
import LoanListScreen from "../features/Loan/LoanListScreen";
import { Dimensions } from "react-native";
import Navbar from "../elements/Navbar";
import HomePage from "../features/Home/Home";

// Create a Drawer Navigator instance, which will be used for mobile navigation.
const Drawer = createDrawerNavigator();

// Create a Stack Navigator instance, which will be used for desktop navigation.
const Stack = createStackNavigator();

// Determine if the device is a mobile device based on screen width.
const isMobile = Dimensions.get("window").width < 768;

const MainStackNavigator = () => {
  return (
    // The NavigationContainer manages the navigation state and links the navigation structure to the app's environment.
    <NavigationContainer>
      {/* Render different navigators based on the device type (mobile or desktop). */}
      {isMobile ? (
        // If on mobile, use a Drawer Navigator to manage navigation with a drawer menu.
        <Drawer.Navigator
          screenOptions={{
            headerShown: true,  // Show headers for each screen.
            drawerType: "front", // Use a front drawer type for navigation.
          }}
        >
          {/* Define the screens available in the Drawer Navigator */}
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="Apply for Loan" component={LoanPage} />
          <Drawer.Screen name="Loan List" component={LoanListScreen} />
        </Drawer.Navigator>
      ) : (
        // If on desktop, use a Stack Navigator with a custom Navbar for navigation.
        <Stack.Navigator
          screenOptions={{
            header: () => <Navbar />,  // Use a custom Navbar as the header.
          }}
        >
          {/* Define the screens available in the Stack Navigator */}
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Apply for Loan" component={LoanPage} />
          <Stack.Screen name="Loan List" component={LoanListScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainStackNavigator;
