// import { Notes } from "./components/notes.component";
// import { CreateComponent } from "./components/create.component";
import { Auth } from "./components/auth.component";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCW5EK9DvgSDuhhU6Mv3qWbmrSUPR48i2g",
    authDomain: "todo-vanillajs.firebaseapp.com",
    databaseURL: "https://todo-vanillajs-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-vanillajs",
    storageBucket: "todo-vanillajs.appspot.com",
    messagingSenderId: "706399592195",
    appId: "1:706399592195:web:a1f9e3c0238fb899025336"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


new Auth('login')
// new CreateComponent('create')
// new Notes('notes')
