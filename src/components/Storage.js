import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userData', jsonValue);
    alert('Värdet har sparats: ' + value);
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
