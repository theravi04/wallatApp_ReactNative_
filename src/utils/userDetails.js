/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveUserDetails = async (userDetails) => {
  try {
    const name = userDetails.name;
    const email = userDetails.email;
    if (name){ 
        await AsyncStorage.setItem('name', name);
    }
    if (email){ 
        await AsyncStorage.setItem('email', email);
    }

  } catch (error) {
    console.error('Error saving tokens:', error);
  }
};

// Retrieve tokens
export const getUserDetails = async () => {
  try {
    const name = await AsyncStorage.getItem('name');
    const email = await AsyncStorage.getItem('email');
    return { image, name, email };
  } catch (error) {
    console.error('Error retrieving tokens:', error);
    return { name: null, email: null };
  }
};

// Clear tokens
export const clearUserDetails = async () => {
  try {
    await AsyncStorage.removeItem('name');
    await AsyncStorage.removeItem('email');
    // await AsyncStorage.removeItem('passwordToken');
  } catch (error) {
    console.error('Error clearing tokens:', error);
  }
};
