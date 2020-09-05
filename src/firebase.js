import firebase from 'firebase';

const firebaseConfig = {
     apiKey: "AIzaSyC-Z959C17fJE0-eqB7OZNeHfdjCkMcAfg",
     authDomain: "facebook-clone-d8723.firebaseapp.com",
     databaseURL: "https://facebook-clone-d8723.firebaseio.com",
     projectId: "facebook-clone-d8723",
     storageBucket: "facebook-clone-d8723.appspot.com",
     messagingSenderId: "90643725331",
     appId: "1:90643725331:web:170622255ec62aac27d3e6",
     measurementId: "G-ETTB0YTPQ8"
   }; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebaseApp.auth() 
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider}  ;
export default db ;