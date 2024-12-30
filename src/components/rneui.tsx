import React, {FC} from 'react';

import {
  Button as RenuiButton,
  BottomSheet as RenuiBottomSheet,
  ButtonGroup as RenuiButtonGroup,
  ButtonProps,
  Card as RneuiCard,
  CheckBox as RenuiCheckBox,
  Icon as RneuiIcon,
  Image as RenuiImage,
  Input as RneuiInput,
  ListItem as RenuiListItem,
  Text as RneuiText,
  Chip as RneuiChip,
  ButtonGroupProps,
  Dialog as RenuiDialog,
  SearchBar as RenuiSearchBar,
} from '@rneui/themed';
import {
  KeyboardAvoidingView as RnKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  SafeAreaView as RnSafeAreaView,
  ScrollView as RnScrollView,
  View as RnView,
  TouchableOpacity as RnTouchableOpacity,
  StatusBar,
} from 'react-native';
import {Dropdown as RnDropdown} from 'react-native-element-dropdown';
import {classed} from '@tw-classed/react';
import {remapProps} from 'nativewind';

export const TouchableOpacity = classed(RnTouchableOpacity);
export const BottomSheet = classed(RenuiBottomSheet);
export const Card = classed(RneuiCard, 'text-black dark:text-white');
export const CheckBox = classed(RenuiCheckBox, 'text-black dark:text-white');
export const Text = classed(RneuiText, 'text-black dark:text-white');
export const Icon = classed(RneuiIcon);
export const Chip = classed(RneuiChip);
export const View = classed(RnView, 'bg-white dark:bg-black');

export const Button: FC<
  ButtonProps & {
    primary?: boolean;
    secondary?: boolean;
    white?: boolean;
    error?: boolean;
    textColor?: string;
  }
> = ({...props}) => {
  const StyledRenuiButton = classed(RenuiButton);
  return <StyledRenuiButton {...props} />;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({...props}) => {
  const StyledRenuiButtonGroup = classed(RenuiButtonGroup);
  return <StyledRenuiButtonGroup {...props} />;
};

export const Image = classed(RenuiImage);

// export const Input = remapProps(RneuiInput, 'text-black dark:text-white', {
//   props: {containerStyle: true, inputContainerStyle: true},
// });

export const ListItem = classed(RenuiListItem, 'text-black dark:text-white');

export const ListItemContent = classed(
  RenuiListItem.Content as any,
  'text-black dark:text-white',
);
export const ListItemTitle = classed(
  RenuiListItem.Title as any,
  'text-black dark:text-white',
);
export const ListItemChevron = classed(
  RenuiListItem.Chevron as any,
  'text-black dark:text-white',
);

// export const Input: FC<InputProps & {onChange?: (value: string) => void}> = props => {
//   return <RneuiInput {...(props as any)} onChange={() => {}} onChangeText={props.onChange} />;
// };

// export const ScrollView = styled(RnScrollView, 'bg-white dark:bg-black', {
//   props: {
//     contentContainerStyle: true,
//   },
// });

export const Dropdown =
  (RnDropdown<any>,
  {
    props: {
      containerStyle: true,
      placeholderStyle: true,
      selectedTextStyle: true,
      itemContainerStyle: true,
      itemTextStyle: true,
      inputSearchStyle: true,
      iconStyle: true,
    },
  });

export const SafeAreaView = classed(RnSafeAreaView, 'bg-white dark:bg-black');

// const safeAreaPaddingTop =
//   Platform.OS === 'android' ? {paddingTop: StatusBar.currentHeight} : {};

// export const KeyboardAvoidingView: FC<
//   KeyboardAvoidingViewProps & {loading?: boolean}
// > = props => {
//   return (
//     <StyledComponent
//       component={RnSafeAreaView}
//       className="bg-white dark:bg-red-300"
//       style={safeAreaPaddingTop}>
//       <StyledComponent
//         component={RnKeyboardAvoidingView}
//         className="white dark:black"
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         {...props}>
//         {props.children}
//       </StyledComponent>
//     </StyledComponent>
//   );
// };

// export const Dialog = cssInterop(RenuiDialog, {
//   props: {
//     overlayStyle: true,
//   },
// });

export const DialogTitle =
  (RenuiDialog.Title,
  {
    props: {
      titleStyle: true,
    },
  });

export const DialogActions = classed(RenuiDialog.Actions);

export const DialogButton =
  (RenuiDialog.Button,
  {
    props: {
      titleStyle: true,
    },
  });

// export const SearchBar = remapProps(RenuiSearchBar, {
//   props: {
//     leftIconContainerStyle: true,
//     containerStyle: true,
//   },
// });
