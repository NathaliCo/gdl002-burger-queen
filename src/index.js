import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import * as serviceWorker from './serviceWorker';
// import Firebase, { FirebaseContext} from './Components/Firebase/';
// ReactDOM.render(
//     <FirebaseContext.Provider value={new Firebase()}>
//       <App />
//     </FirebaseContext.Provider>,
//     document.getElementById('root'),
//   );
  
   serviceWorker.unregister();




// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBjd2iTaUw5Ez6YdJ33mPG9EwOoyhLOkJE",
//     authDomain: "burger-queen-5d91f.firebaseapp.com",
//     databaseURL: "https://burger-queen-5d91f.firebaseio.com",
//     projectId: "burger-queen-5d91f",
//     storageBucket: "burger-queen-5d91f.appspot.com",
//     messagingSenderId: "962536005959",
//     appId: "1:962536005959:web:60857f12a7f342ef"
//   };
//   // Initialize Firebase
//   const app=  firebase.initializeApp(firebaseConfig);
// const base = Rebase.createClass(app.database())

// export {base}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

