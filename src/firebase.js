import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDuO8ILVUQBkRmNxzQNbe7xdJOVHa3q6T4",
  authDomain: "goalcoach-56b57.firebaseapp.com",
  projectId: "goalcoach-56b57",
  storageBucket: "goalcoach-56b57.appspot.com",
  messagingSenderId: "686848969391",
  appId: "1:686848969391:web:481ef512412660ad7f225a",
  measurementId: "G-XTE8Q59EEP"
};


export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
// goalRef.push({}) 
// goalRef.on('value', snap => {
//  snap.forEach(goal => {
//   goal.val() ; goal.key
//  })  
// })
