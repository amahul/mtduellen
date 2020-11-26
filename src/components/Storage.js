<<<<<<< HEAD
import AsyncStorage from '@react-native-community/async-storage';
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095

// ----------------------------------
// Becca testar AsyncStorage
// ----------------------------------
<<<<<<< HEAD
const STORAGE_KEY = '@save_score'

const saveData = async (score) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, score)
    alert('Data successfully saved')
  } catch (e) {
    alert(e)
  }
}

const readData = async () => {
  try {
    const userScore = await AsyncStorage.getItem(STORAGE_KEY)
    alert(userScore)
    if (userScore !== null) {
      setHighscore(userScore)
    }
  } catch (e) {
    alert(e)
  }
}

const setHighscore = (userScore) => {
const newHighScore = userScore;
}
=======

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
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095

// useEffect(() => {
//   readData()
// }, [])

const clearStorage = async () => {
  try {
<<<<<<< HEAD
    await AsyncStorage.clear()
    alert('Storage successfully cleared!')
  } catch (e) {
    alert('Failed to clear the async storage.')
  }
};

module.exports = {readData, saveData}
=======
    await AsyncStorage.clear();
    alert('Storage successfully cleared!');
  } catch (e) {
    alert('Failed to clear the async storage.');
  }
};

module.exports = {readData, saveData};
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095
