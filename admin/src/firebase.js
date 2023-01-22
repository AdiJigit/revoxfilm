import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBL0nOf0etuapPfDv0eaosNrsUg_tuS5Ro',
  authDomain: 'revoxfilm-83e54.firebaseapp.com',
  projectId: 'revoxfilm-83e54',
  storageBucket: 'revoxfilm-83e54.appspot.com',
  messagingSenderId: '130058425921',
  appId: '1:130058425921:web:7a82508f3f94ea0fd818c0',
  measurementId: 'G-1CS3KR2EE6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
