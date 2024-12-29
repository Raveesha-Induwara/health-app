import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import OfferCardImages from '../data/offerCardData';
import classNames from 'classnames';

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

interface OfferCardImagesProps {
  id: string;
  imageLink: string;
}

export const CardSlider = () => {
  let flatListRef = useRef<FlatList<OfferCardImagesProps> | null>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfigRef = {viewAreaCoveragePercentThreshold: 94};

  //only needed if you want to know the index
  const onViewRef = useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({animated: true, index: index});
  };

  // Auto Scroll
  useEffect(() => {
    let interval = setInterval(() => {
      if (currentIndex === OfferCardImages.length - 1) {
        flatListRef.current?.scrollToIndex({animated: true, index: 0});
      } else {
        flatListRef.current?.scrollToIndex({
          animated: true,
          index: currentIndex + 1,
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  return (
    <View>
      {/* Carousel FlatList */}
      <FlatList
        className="mt-4 bg-primaryLightGrey"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled={true}
        snapToInterval={screenWidth}
        snapToAlignment="start"
        decelerationRate="normal"
        data={OfferCardImages}
        renderItem={({item}) => {
          return <Image source={item.imageLink} style={styles.Image} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ref={ref => {
          flatListRef.current = ref;
        }}
        getItemLayout={getItemLayout}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />

      {/* pagination dots */}
      <View className="flex-row justify-center my-5">
        {OfferCardImages.map(({}, index: number) => (
          <TouchableOpacity
            className={classNames(
              'w-2 h-2 mx-1 bg-SecondaryGrey rounded-full',
              {
                'bg-primaryBlue': index === currentIndex,
              },
            )}
            key={index.toString()}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    marginHorizontal: RPW(3),
    width: RPW(94),
    height: RPH(26),
    resizeMode: 'cover',
    borderRadius: 12,
  },
});
