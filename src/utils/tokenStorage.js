/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */

import AsyncStorage from '@react-native-async-storage/async-storage';

// Save tokens
export const saveTokens = async (passwordToken) => {
  try {
    if (passwordToken){ 
        await AsyncStorage.setItem('passwordToken', passwordToken);
    }
  } catch (error) {
    console.error('Error saving tokens:', error);
  }
};

// Retrieve tokens
export const getTokens = async () => {
  try {
    const passwordToken = await AsyncStorage.getItem('passwordToken');
    return {passwordToken };
  } catch (error) {
    console.error('Error retrieving tokens:', error);
    return { passwordToken: null };
  }
};

// Clear tokens
export const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('pinToken');
    // await AsyncStorage.removeItem('passwordToken');
  } catch (error) {
    console.error('Error clearing tokens:', error);
  }
};
