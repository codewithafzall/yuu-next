import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");
require("firebase/storage")

const config = {

    apiKey: "AIzaSyBCBBulMGmii7ObAPmPF0khTfWe4hl9k3I",
  authDomain: "az-sys-dashboard.firebaseapp.com",
  databaseURL: "https://az-sys-dashboard-default-rtdb.firebaseio.com",
  projectId: "az-sys-dashboard",
  storageBucket: "az-sys-dashboard.appspot.com",
  messagingSenderId: "283466753885",
  appId: "1:283466753885:web:7751e475e66d02473ceab4",
  measurementId: "G-05NY5EM1J4"

};

const fire = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();

export default fire;