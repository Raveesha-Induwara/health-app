import React, {useCallback, useEffect} from 'react';
import './global.css';
import {LogBox, Platform, StatusBar} from 'react-native';
import {useColorScheme} from 'nativewind';
import {API_BASE, LOG_NETWORK} from '@env';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ButtonProps, createTheme, ThemeProvider} from '@rneui/themed';
import {RootNavigator} from './src/navigation/RootNavigator';
import {ConnectionProvider} from '@sezenta/react-native-connection';
import {Provider} from 'react-redux';
import {store} from './src/utils/state/store';

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
        primary?: boolean;
        secondary?: boolean;
        error?: boolean;
        default?: boolean;
      },
      themeColor,
    ) => ({
      titleStyle: {
        paddingHorizontal: 5,
        fontFamily: FONT_FAMILY,
        fontWeight: '500',
        lineHeight: 30,
        color: props.primary
          ? themeColor.colors.white
          : props.default
          ? themeColor.colors.primary
          : props.error
          ? themeColor.colors.white
          : themeColor.colors.primary,
        fontSize: props.size === 'sm' ? 14 : 18,
        marginTop: Platform.OS === 'ios' ? 3 : 0,
      },
      buttonStyle: {
        borderRadius: 5,
        borderWidth: props.primary ? 0 : 1,
        borderColor: themeColor.colors.primary,
        backgroundColor: props.primary
          ? themeColor.colors.primary
          : props.error
          ? themeColor.colors.error
          : themeColor.colors.white,
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

  const userIdProvider = useCallback((u: any) => 'default', []);

  return (
    <ConnectionProvider
      baseUrl={API_BASE}
      profile="default"
      userId={userIdProvider}
      logEnabled={LOG_NETWORK === 'true'}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    </ConnectionProvider>
  );
}

export default App;
