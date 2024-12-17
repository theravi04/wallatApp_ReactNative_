/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider, AuthContext } from "./src/utils/authProvider"; // Correct Import

import HomeScreen from "./src/HomeScreen";
import SignUpScreen from "./src/SignUpScreen";
import PasswordLogInScreen from "./src/PasswordLogInScreen";
import TransactionsScreen from "./src/TransactionsScreen";
import ProfileScreen from "./src/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

// AuthNavigator for login and registration screens
function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={PasswordLogInScreen} />
      <AuthStack.Screen name="Register" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

// MainTabNavigator for the main tabs after login
function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );
}

// RootNavigator that switches between Auth and Main screens
function RootNavigator() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
