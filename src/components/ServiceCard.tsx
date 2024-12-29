import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Colors} from '../utils/Colors';

interface ServiceCardProps {
  profilePic?: string;
  region: string;
  region_code: string;
  period: string;
  geo_area: string;
  students_trained: string;
}

export const ServiceCard: React.FC<{item: ServiceCardProps}> = ({item}) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  return (
    <TouchableNativeFeedback onPress={() => {}}>
      <View className="py-4 px-3 bg-white border border-gray rounded-md shadow-md">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            {/* Doctor Profile Image */}
            {item.profilePic === undefined ? (
              <Image
                source={require('../assets/app-images/doctor.png')}
                className="w-12 h-12 rounded-full"
                style={styles.Image}
              />
            ) : (
              <Image
                source={{uri: item.profilePic}}
                className="w-12 h-12 rounded-full"
              />
            )}

            <View>
              <Text className="mt-1 text-base text-black font-semibold">
                Dr.Raveesha Induwara
              </Text>

              {/* Reviews & Rating */}
              <View className="mt-1 flex-row items-center">
                <View className="flex-row items-center">
                  <AntDesign name="star" size={16} color={Colors.Yellow} />
                  <Text className="ml-2 text-base font-bold text-yellow-500">
                    {parseInt(item.students_trained, 10) % 5}
                  </Text>
                </View>
                <Text className="ml-2 text-sm text-primary">
                  {'('}
                  {parseInt(item.students_trained, 10) % 10}
                  <Text className="text-sm text-secondaryBlue">
                    {' '}
                    Reviews{')'}{' '}
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View className="mr-3">
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? (
                <AntDesign name="heart" size={25} color={Colors.Favorite} />
              ) : (
                <AntDesign name="hearto" size={25} color={Colors.Favorite} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Service Details */}
        <View className="ml-4 flex-1">
          <View className="mt-1 flex-row justify-between">
            <View>
              <View className="mt-1 flex-row">
                <Text className="ml-1 text-base text-dark font-medium">
                  Service Region:
                </Text>
                <Text className="text-base text-dark font-medium">
                  {'  '}
                  {item.region}
                </Text>
              </View>
              <View className="mt-1 flex-row">
                <Text className="ml-1 text-base text-dark font-medium">
                  Service Period:
                </Text>
                <Text className="text-base text-dark font-medium">
                  {'   '}
                  {item.period}
                </Text>
              </View>

              {/* Location */}
              <View className="mt-1 flex-row">
                <EvilIcons name="location" size={25} color={'#000'} />
                <Text className="ml-1 text-base font-medium text-dark">
                  {item.geo_area}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  Image: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});
