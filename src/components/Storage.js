import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (value) => {
  alert('store');
  try {
    const jsonValue = JSON.stringify(value);
<<<<<<< HEAD
    await AsyncStorage.setItem('@storage_Key', jsonValue);
    alert('store');
=======
    await AsyncStorage.setItem('userData', jsonValue);
    alert('Värdet har sparats: ' + value);
>>>>>>> 349f1559598909e4b3cc63170e74729d51dcc6bf
  } catch (e) {
    alert(e);
  }
};

const readData = async () => {
  try {
<<<<<<< HEAD
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    console.log('value: ' + jsonValue);
    return jsonValue;
=======
    const jsonValue = await AsyncStorage.getItem('userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
>>>>>>> 349f1559598909e4b3cc63170e74729d51dcc6bf
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

module.exports = {readData, saveData};
