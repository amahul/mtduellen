// import AsyncStorage from '@react-native-community/async-storage';

// // ----------------------------------
// // Becca testar AsyncStorage
// // ----------------------------------
// const STORAGE_KEY = '@save_score'

// const saveData = async (score) => {
//   try {
//     await AsyncStorage.setItem(STORAGE_KEY, score)
//     alert('Data successfully saved')
//   } catch (e) {
//     alert(e)
//   }
// }

// const readData = async () => {
//   try {
//     const userScore = await AsyncStorage.getItem(STORAGE_KEY)
//     alert(userScore)
//     if (userScore !== null) {
//       setHighscore(userScore)
//     }
//   } catch (e) {
//     alert(e)
//   }
// }

// const setHighscore = (userScore) => {
// const newHighScore = userScore;
// }

// // useEffect(() => {
// //   readData()
// // }, [])

// const clearStorage = async () => {
//   try {
//     await AsyncStorage.clear()
//     alert('Storage successfully cleared!')
//   } catch (e) {
//     alert('Failed to clear the async storage.')
//   }
// };

// module.exports = {readData, saveData}
