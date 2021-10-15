import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB4I0gMKYIoJ-CAzJLQQ-7JuSHFc3-RdR0",
    authDomain: "vueclark.firebaseapp.com",
    projectId: "vueclark",
    storageBucket: "vueclark.appspot.com",
    messagingSenderId: "135455630840",
    appId: "1:135455630840:web:9ee408ff6168352e78620d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { timestamp };
  export default firebaseApp.firestore();