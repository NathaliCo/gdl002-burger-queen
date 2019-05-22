import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjd2iTaUw5Ez6YdJ33mPG9EwOoyhLOkJE",
    authDomain: "burger-queen-5d91f.firebaseapp.com",
    databaseURL: "https://burger-queen-5d91f.firebaseio.com",
    projectId: "burger-queen-5d91f",
    storageBucket: "burger-queen-5d91f.appspot.com",
    messagingSenderId: "962536005959",
    appId: "1:962536005959:web:60857f12a7f342ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

//   const database = firebase.database();
// database.ref('menu')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e)
// })