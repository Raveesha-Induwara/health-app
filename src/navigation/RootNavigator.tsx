import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootNavigation';
import {Colors} from '../utils/Colors';

import {SplashScreen} from '../screens/splash/SplashScreen';
import {OnboardingScreen} from '../screens/splash/OnBoardingScreen';
import {WelcomeScreen} from '../screens/welcome/WelcomeScreen';
import {SignInScreen} from '../screens/signin/SignInScreen';
import {SignUpScreen} from '../screens/signup/SignUpScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {LoginSuccessScreen} from '../screens/signin/LoginSuccess';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.White,
          },
          headerShadowVisible: true,
          headerTintColor: Colors.Dark,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '500',
          },
          // statusBarColor: Colors.PrimaryWhite,
          // statusBarStyle: 'dark',
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginSuccess"
          component={LoginSuccessScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
