import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FC, PropsWithChildren} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  LoginSuccess: undefined;
};

export type NavigationHookType = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps<RouteName extends keyof RootStackParamList> =
  PropsWithChildren<{
    route: RouteProp<RootStackParamList, RouteName>;
  }>;

export type Screen<RouteName extends keyof RootStackParamList> = FC<
  ScreenProps<RouteName>
>;

export const useNav = () => useNavigation<NavigationHookType>();
