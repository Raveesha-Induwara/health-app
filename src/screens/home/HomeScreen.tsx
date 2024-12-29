import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  BackHandler,
  FlatList,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNav} from '../../navigation/RootNavigation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ServiceCard} from '../../components/ServiceCard';
import {CardSlider} from '../../components/CardSlider';
import {useFocusEffect} from '@react-navigation/native';
import {useConnection} from '@sezenta/react-native-connection';
import classNames from 'classnames';
import {Image} from '@rneui/base';
import {SearchBarComponent} from '../../components/Searchbar';
import CategoryData from '../../data/categoryData';
import LottieView from 'lottie-react-native';

// Get screen dimension
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};
const RPH = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};

export const HomeScreen = ({}) => {
  const navigation = useNav();
  const connection = useConnection();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [doctorList, setDoctorList] = useState<Array<object>>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState(0);

  //   Get service providers profile data from DB
  const fetchDoctors = useCallback(async () => {
    try {
      const response = await connection.get(
        'https://www.healthit.gov/data/open-api?source=workforce-programs-trained.csv',
      );
      setDoctorList(response.data.slice(10, 20));
      setLoading(false);
    } catch (e) {
      console.log('Error ', e);
    }
  }, [connection]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  //Refreshing the screen
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchDoctors();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [fetchDoctors]);

  // Back handler function
  //   Stop Going back from Home to Login
  const handlerBackPress = () => {
    // if (user) {
    BackHandler.exitApp();
    return true;
    // }
  };

  useFocusEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlerBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlerBackPress);
    };
  });

  // Category items render method
  const _renderCategories = ({item}: any) => {
    return (
      <View className="mr-5">
        <TouchableOpacity
          className="items-center"
          onPress={() => {
            // setCategory();
          }}>
          <View
            style={styles.IconContainer}
            className={classNames('items-center justify-center rounded-xl', {
              'bg-blue-100': item.bgColor === 'blue',
              'bg-purple-100': item.bgColor === 'purple',
              'bg-orange-100': item.bgColor === 'orange',
              'bg-yellow-100': item.bgColor === 'yellow',
              'bg-green-100': item.bgColor === 'green',
              'bg-cyan-100': item.bgColor === 'cyan',
              'bg-pink-100': item.bgColor === 'pink',
              'bg-red-100': item.bgColor === 'red',
            })}>
            <FontAwesome6 name={item.icon} size={30} color={item.iconColor} />
          </View>

          <Text className="mt-2 text-base font-normal text-primaryBlack">
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View className="items-center justify-center flex-1 bg-white">
        <LottieView
          source={require('../../assets/animations/loading.json')}
          autoPlay
          loop
          style={{width: RPW(60), height: RPH(60)}}
        />
        <Text className="mt-2 text-primaryBlue">Loading...</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView className="flex-1 ">
        <StatusBar
          backgroundColor={Colors.Primary}
          barStyle={'light-content'}
        />
        <ScrollView
          className="flex-grow bg-white"
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {/* Header bar */}
          <View
            className="flex-row items-center justify-between px-8 pt-8 pb-5 bg-primary"
            style={{paddingHorizontal: RPW(6)}}>
            <View className="flex-0.9">
              <View className="flex-row items-center">
                <View className="mr-2 bg-gray rounded-full overflow-hidden">
                  <Image
                    source={require('../../assets/app-images/profile.webp')}
                    style={styles.ImageStyles}
                  />
                </View>

                <View>
                  <Text className="text-base text-lightGrey">
                    Hi, Welcome Back,
                  </Text>
                  <Text className="text-lg font-medium text-white">
                    Raveesha Induwara
                  </Text>
                </View>
              </View>
            </View>

            <View className="float-right">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <FontAwesome6 name="bell" size={25} color={Colors.LightGrey} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Screen Title */}
          <Text
            className="text-3xl font-medium mt-7 text-black"
            style={{marginHorizontal: RPW(6)}}>
            Find
            <Text className="text-gray"> your specialist</Text>
          </Text>

          {/* Search bar */}
          <View className="flex-grow mt-4" style={{marginHorizontal: RPW(6)}}>
            <SearchBarComponent />
          </View>

          {/* Offers Scroller */}
          <Text
            className="mt-5 text-lg font-medium text-black"
            style={{marginHorizontal: RPW(6)}}>
            Special offers
          </Text>

          {/* Call the Offer card FlatList custom component */}
          <CardSlider />

          {/* Categories Scroller */}
          <Text
            className="mb-2 text-lg font-medium text-black"
            style={{marginHorizontal: RPW(6)}}>
            Categories
          </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row items-center">
              {/* FlatList for render category item */}
              <FlatList
                className="mt-4"
                style={{marginHorizontal: RPW(6)}}
                horizontal={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                data={CategoryData}
                keyExtractor={(item: any) => item._id}
                renderItem={_renderCategories}
              />
            </View>
          </ScrollView>

          {/* Service Card */}
          <Text
            className="mt-8 mb-4 text-lg font-medium text-black"
            style={{marginHorizontal: RPW(6)}}>
            Top Doctors
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginBottom: 20, marginHorizontal: RPW(6)}}>
            {doctorList.map((item: any, index: number) => (
              <View className="mb-4" key={index}>
                <ServiceCard item={item} />
              </View>
            ))}
          </ScrollView>
        </ScrollView>

        {/* floating button */}
        <TouchableOpacity
          className="absolute z-10 bg-primary opacity-60 items-center justify-center rounded-full"
          style={styles.buttonContainer}
          onPress={() => {}}>
          <View className="flex-row items-center">
            <MaterialIcons name="touch-app" size={25} color="#fff" />
            <Text className="text-lg text-white">{clickCount}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  ImageStyles: {
    width: RPW(10),
    height: RPW(10),
    resizeMode: 'contain',
  },
  IconContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  buttonContainer: {
    width: 80,
    height: 60,
    bottom: 20,
    right: 20,
    elevation: 5,
  },
});
