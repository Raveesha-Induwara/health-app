import React from 'react';
import {
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {useNav} from '../../navigation/RootNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../components/rneui';

// Get screen dimension
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// RPW is a function to set responsive width
const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};
const RPH = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};

export const WelcomeScreen: React.FC = () => {
  const navigation = useNav();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor={Colors.White} />
      {/* Main container */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: RPW(8),
          marginTop: RPH(10),
        }}>
        <View>
          {/* Image */}
          <View className="items-center ">
            <Image
              source={require('../../assets/app-images/logo.png')}
              style={styles.imageStyle}
            />
          </View>
          <View className="gap-5">
            <Text className="text-3xl font-medium text-center text-black">
              Find Best Specialists
            </Text>
            <Text className="text-xl font-normal text-center text-dark">
              Treatment from the best specialists from around the world
            </Text>
          </View>

          {/* Call button component */}
          <View className="mt-8 gap-6">
            <Button
              loading={false}
              title="Sign In"
              onPress={() => {
                navigation.navigate('SignIn');
              }}
              primary
            />
            <Button
              loading={false}
              title="Sign Up"
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              white
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: RPH(40),
    width: RPW(70),
    resizeMode: 'contain',
  },
});
