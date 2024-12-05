import React, {useEffect} from 'react';
import './global.css';
import {LogBox, Platform, StatusBar} from 'react-native';
import {useColorScheme} from 'nativewind';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ButtonProps, createTheme, ThemeProvider} from '@rneui/themed';
import {RootNavigator} from './src/navigation/RootNavigator';

export const FONT_FAMILY = 'Poppins';

const theme = createTheme({
  lightColors: {
    primary: '#0070FF',
    secondary: '#263446',
    grey0: '#788AA5',
    white: '#FFFFFF',
    black: '#000',
    error: '#C62B3B',
  },
  darkColors: {
    primary: '#001899',
    secondary: '#263446',
    grey0: '#788AA5',
    error: '#C62B3B',
    black: '#000',
    white: '#FFFFFF',
  },
  mode: 'light',
  components: {
    Button: (
      props: ButtonProps & {
        white?: boolean;
        error?: boolean;
        secondary?: boolean;
        default?: boolean;
        secondaryTextColor?: string;
      },
      themeColor,
    ) => ({
      titleStyle: {
        paddingHorizontal: 5,
        fontFamily: FONT_FAMILY,
        fontWeight: '500',
        lineHeight: 25,
        color: props.secondary
          ? props.secondaryTextColor || themeColor.colors.white
          : props.white
          ? themeColor.colors.secondary
          : props.error
          ? themeColor.colors.white
          : themeColor.colors.white,
        fontSize: props.size === 'sm' ? 14 : 18,
        marginTop: Platform.OS === 'ios' ? 3 : 0,
      },
      buttonStyle: {
        borderRadius: 5,
        borderWidth: 0,
        borderColor: themeColor.colors.secondary,
        backgroundColor: props.secondary
          ? themeColor.colors.secondary
          : props.error
          ? themeColor.colors.error
          : props.white
          ? themeColor.colors.white
          : themeColor.colors.secondary,
      },
    }),
    ButtonGroup: {
      textStyle: {fontFamily: FONT_FAMILY},
      buttonStyle: {
        borderRadius: 8,
      },
      containerStyle: {
        borderWidth: 0,
        backgroundColor: 'transparent',
      },
      innerBorderStyle: {color: 'transparent'},
    },
    Input: {
      style: {
        fontFamily: FONT_FAMILY,
        paddingHorizontal: 6,
        marginBottom: Platform.OS === 'ios' ? 10 : 0,
      },
      labelStyle: {
        fontFamily: FONT_FAMILY,
        color: '#000',
      },
      errorStyle: {
        fontSize: 16,
      },
    },
    Text: {
      style: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: FONT_FAMILY,
      },
      h1Style: {
        lineHeight: 60,
        fontFamily: FONT_FAMILY,
      },
      h2Style: {
        lineHeight: 51,
        fontFamily: FONT_FAMILY,
      },
      h3Style: {
        lineHeight: 42,
        fontFamily: FONT_FAMILY,
      },
      h4Style: {
        lineHeight: 33,
        fontFamily: FONT_FAMILY,
      },
    },
    Icon: {
      iconStyle: {
        alignSelf: 'flex-start',
      },
    },
    ListItem: {
      containerStyle: {
        backgroundColor: '#2C2C2E',
        borderRadius: 15,
      },
    },
    ListItemTitle: {
      style: {
        fontFamily: FONT_FAMILY,
      },
    },
    CheckBox: {
      fontFamily: FONT_FAMILY,
      textStyle: {
        fontWeight: '500',
        lineHeight: 18,
      },
      containerStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
});

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();
  const {colorScheme, setColorScheme} = useColorScheme();

  useEffect(() => {
    StatusBar.setBarStyle(
      colorScheme === 'light' ? 'dark-content' : 'light-content',
    );
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colorScheme === 'light' ? '#fff' : '#000');
      StatusBar.setTranslucent(true);
    }
  }, [colorScheme]);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
