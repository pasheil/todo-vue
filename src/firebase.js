import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDexEpI1AwhRBRZg9pmul41_rtI8uYLVaM///",
  authDomain: "todos-14876.firebaseapp.com",
  databaseURL: "https://todos-14876.firebaseio.com",
  projectId: "todos-14876",
  storageBucket: "todos-14876.appspot.com",
  messagingSenderId: "144389410000"
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })




export default firestore
