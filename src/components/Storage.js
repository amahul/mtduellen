import AsyncStorage from '@react-native-async-storage/async-storage';

// ----------------------------------
// Becca testar AsyncStorage
// ----------------------------------

const saveData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
    alert(value);
  } catch (e) {
    alert(e);
  }
};

const readData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};

// useEffect(() => {
//   readData()
// }, [])

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    alert('Storage successfully cleared!');
  } catch (e) {
    alert('Failed to clear the async storage.');
  }
};

module.exports = {readData, saveData};
