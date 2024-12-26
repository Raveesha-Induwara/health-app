import React from 'react';
import {Dimensions, StyleSheet, Image, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useNav} from '../../navigation/RootNavigation';
import {Colors} from '../../utils/Colors';
import classNames from 'classnames';
import {FONT_FAMILY} from '../../../App';
import {Button} from '@rneui/themed';

// Get screen dimension
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

// RPH ans RPW are functions to set responsive width and height
const RPH = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};
const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};

const backgroundColor = (isLight: boolean) =>
  isLight ? Colors.Primary : Colors.White;
const color = (isLight: boolean) => backgroundColor(!isLight);

const Done = ({isLight, ...props}: any) => (
  <Button
    title={'Done'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerStyle={{
      marginHorizontal: RPW(10),
      width: RPW(23),
    }}
    titleStyle={{color: color(isLight)}}
    {...props}
  />
);

const Next = ({isLight, nextLabel, ...props}: any) => (
  <Button
    title={'Next'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerStyle={{
      marginHorizontal: RPW(10),
      width: RPW(23),
    }}
    titleStyle={{color: color(isLight)}}
    {...props}>
    {nextLabel}
  </Button>
);

const Skip = ({skipLabel, ...props}: any) => (
  <Button
    title={'Skip'}
    // eslint-disable-next-line react-native/no-inline-styles
    buttonStyle={{
      borderWidth: 1,
      borderColor: Colors.Gray,
      backgroundColor: Colors.White,
    }}
    // eslint-disable-next-line react-native/no-inline-styles
    containerStyle={{
      marginHorizontal: RPW(10),
      width: RPW(23),
    }}
    titleStyle={{color: Colors.Gray}}
    {...props}>
    {skipLabel}
  </Button>
);

const Dots = ({selected}: any) => {
  return (
    <View
      className={classNames('h-2 w-2 mx-1 rounded-full bg-gray', {
        'bg-black': selected,
      })}
    />
  );
};

export const OnboardingScreen = () => {
  const navigation = useNav();

  return (
    <Onboarding
      onSkip={() => navigation.navigate('Welcome')}
      onDone={() => navigation.navigate('Welcome')}
      bottomBarColor={Colors.White}
      bottomBarHeight={RPH(15)}
      bottomBarHighlight={true}
      // Custom Components Properties
      DoneButtonComponent={Done}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DotComponent={Dots}
      // Page Styles
      containerStyles={styles.ContainerStyle}
      //imageContainerStyles={styles.ImageContainerStyles}
      titleStyles={styles.TitleStyles}
      subTitleStyles={styles.SubTitleStyles}
      pages={[
        {
          backgroundColor: Colors.White,
          image: (
            <Image
              source={require('../../assets/app-images/lady-doctor.png')}
              style={styles.ImageStyles}
            />
          ),
          title: 'Find multiple specialist in one place',
          subtitle: 'Are you struggling with the finding trusted doctors?',
        },
        {
          backgroundColor: Colors.White,
          image: (
            <Image
              source={require('../../assets/app-images/doctor.png')}
              style={(styles.ImageStyles, {marginTop: 0})}
            />
          ),
          title: 'Consult with trusted doctors',
          subtitle:
            'Our platform is designed to provide all details about the doctors.',
        },
        {
          backgroundColor: Colors.White,
          image: (
            <Image
              source={require('../../assets/app-images/lady-doctor2.png')}
              style={styles.ImageStyles}
            />
          ),
          title: 'Contact to our online counseling service',
          subtitle:
            'Expand care access and improve patient outcomes with digital core.',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  ContainerStyle: {
    flex: 1,
    paddingHorizontal: RPW(10),
    backgroundColor: Colors.White,
  },
  ImageStyles: {
    width: RPW(70),
    height: RPH(50),
    resizeMode: 'contain',
  },
  TitleStyles: {
    marginTop: -20,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    color: Colors.Dark,
    fontFamily: FONT_FAMILY,
  },
  SubTitleStyles: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 24,
    color: Colors.Dark,
    fontFamily: FONT_FAMILY,
  },
});
