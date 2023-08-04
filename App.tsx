// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SignupPage from './SignUpPage';
import SignInPage from './SignInPage';
import ForecastPage from './ForecastPage';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = ({ setUserLoggedIn }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="SignUp" component={SignupPage} />
      <Stack.Screen
        name="SignIn">
        {props => <SignInPage {...props} onLoginSuccess={() => setUserLoggedIn(true)} />}
      </Stack.Screen>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

const CustomTabBarIcon = (name, focused) => {
  let iconImagePath;
  let iconImageSize = 24;

  // Define your custom icon images and sizes here based on the icon name and focus state
  if (name === 'Home') {
    iconImagePath = focused ? require('./images/home.png') : require('./images/home.png');
  } else if (name === 'Forecast') {
    iconImagePath = focused ? require('./images/forecast.png') : require('./images/forecast.png');
  } else if (name === 'Settings') {
    iconImagePath = focused ? require('./images/settings.png') : require('./images/settings.png');
  } else if (name === 'About') {
    iconImagePath = focused ? require('./images/info.png') : require('./images/info.png');
  } else if (name === 'Contact') {
    iconImagePath = focused ? require('./images/contactmail.png') : require('./images/contactmail.png');
  }

  return <Image source={iconImagePath} style={{ width: iconImageSize, height: iconImageSize }} />;
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => CustomTabBarIcon(route.name, focused),
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Forecast" component={ForecastPage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
      <Tab.Screen name="About" component={AboutPage} />
      <Tab.Screen name="Contact" component={ContactPage} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    checkUserAuthentication();
  }, []);

  const checkUserAuthentication = () => {
    setTimeout(() => {
      const isLoggedIn = true;
      setUserLoggedIn(isLoggedIn);
    }, 500000);
  };

  return (
    <NavigationContainer>
      {userLoggedIn ? (
        <MainTabs />
      ) : (
        <AuthStack setUserLoggedIn={setUserLoggedIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
