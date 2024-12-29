import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const SearchBarComponent = () => {
  const [searchText, setSearchText] = useState('');
  // update input text
  const updateSearch = (text: string) => {
    setSearchText(text);
  };

  const searchIcon =
    searchText.length === 0 ? (
      <AntDesign name="search1" size={20} color={Colors.Dark} />
    ) : (
      <FontAwesome name="search" size={20} color={Colors.Dark} />
    );

  return (
    <View className="flex-row items-center">
      <View className="flex-1">
        <SearchBar
          placeholder="Search doctor, medicines, etc."
          placeholderTextColor={Colors.Gray}
          value={searchText}
          onChangeText={updateSearch}
          inputMode="text"
          round={true}
          lightTheme={true}
          searchIcon={searchIcon}
          containerStyle={styles.SearchBarContainerStyle}
          inputStyle={styles.SearchInputText}
          leftIconContainerStyle={styles.SearchIcon}
          onSubmitEditing={() => {
            setSearchText('');
          }}
          returnKeyType="search"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBarContainerStyle: {
    marginLeft: -7,
    backgroundColor: Colors.White,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  SearchInputText: {
    height: 50,
    color: Colors.Dark,
    fontSize: 18,
  },
  SearchIcon: {
    marginLeft: 15,
  },
});
