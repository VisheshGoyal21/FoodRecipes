import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAphNjY3_2ecYrr-toXbavmnYe-zEVNQRg",
  authDomain: "foodrecipes2-cfffc.firebaseapp.com",
  projectId: "foodrecipes2-cfffc",
  storageBucket: "foodrecipes2-cfffc.appspot.com",
  messagingSenderId: "629409583388",
  appId: "1:629409583388:web:761945a7e23a0331326ad9"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }