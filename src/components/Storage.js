import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userData', jsonValue);
  } catch (e) {
    alert(e);
  }
};

const saveHighScore = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userHighScore', jsonValue);
  } catch (e) {
    alert(e);
  }
};

const readData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};

const readHighScore = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userHighScore');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    alert('Storage successfully cleared!');
  } catch (e) {
    alert('Failed to clear the async storage.');
  }
};

module.exports = {readData, saveData, saveHighScore, readHighScore};
