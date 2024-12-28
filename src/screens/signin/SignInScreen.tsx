import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {Button} from '../../components/rneui';
import {useNav} from '../../navigation/RootNavigation';
import {Colors} from '../../utils/Colors.ts';
import {useForm, Controller} from 'react-hook-form';

// Get screen dimension
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// RPW and RPH are functions to set responsive width and height
const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};
const RPH = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};

export const SignInScreen = () => {
  const navigation = useNav();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const submit = (data: any) => {
    Alert.alert('Form Data', JSON.stringify(data));
  };

  return (
    <KeyboardAvoidingView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: RPW(8),
          marginTop: RPH(10),
        }}>
        <View className="my-8 items-center">
          <Text className="text-3xl font-semibold text-black">
            {'Welcome back'}!
          </Text>
          <Text className="mt-3 text-xl font-normal text-dark">
            {'Please login to your account.'}
          </Text>
        </View>

        <View className="gap-5 mb-3">
          <View>
            {/* Email input */}
            <Text className="mb-2 text-lg font-normal text-black">Email</Text>
            <Controller
              name="email"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter your email"
                  style={styles.input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
              rules={{required: true, pattern: /^\S+@\S+$/i}}
            />
            {errors.email && (
              <Text className="text-red-600">
                {'Enter valid email address'}
              </Text>
            )}
          </View>

          <View>
            {/* Password input */}
            <Text className="mb-2 text-lg font-normal text-black">
              Password
            </Text>
            <Controller
              name="password"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter your password"
                  style={styles.input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
              rules={{required: true, minLength: 6}}
            />
            {errors.password && (
              <Text className="text-red-600">
                {'Password must be at least 6 characters'}
              </Text>
            )}
          </View>
        </View>

        {/* Recover account */}
        <TouchableOpacity className="mt-10 mb-6 flex-row justify-end">
          <Text className="text-lg font-semibold text-primary">
            {'Forgot Password'}
          </Text>
        </TouchableOpacity>

        {/* Button */}
        <View className="mb-10">
          <Button
            loading={loading}
            title={'Sign In'}
            primary
            onPress={(Keyboard.dismiss(), handleSubmit(submit))}
          />
        </View>

        {/* Sign Up */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text className="text-lg font-normal text-gray text-center">
            {"Don't have an account? "}
            <Text className="font-semibold text-primary">{'Sign Up'}</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 5,
    height: 55,
    paddingHorizontal: 10,
    fontSize: 16,
    color: Colors.Dark,
  },
});
