import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootNavigation';
import {Colors} from '../utils/Colors';

import {TestScreen} from '../screens/test/TestScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Test"
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
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
