import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import GoogleSignInButton from './GoogleSignInButton';
import WelcomeScreen from './WelcomeScreen';

// Your Firebase initialization code here
const firebaseConfig = {
  apiKey: "AIzaSyD7XXwvVZ1uMhWFbaEQ3clSdBJn5sKkItU",
  authDomain: "smallbusiness-26cbb.firebaseapp.com",
  projectId: "smallbusiness-26cbb",
  storageBucket: "smallbusiness-26cbb.appspot.com",
  messagingSenderId: "144105488810",
  appId: "1:144105488810:web:be17cb9dd0acb157312bd3",
  measurementId: "G-9GQ2ZD1647"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <Router>
      <div>
       
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/welcome" element={<WelcomeScreen />} /> {/* Use element prop for component */}
          <Route path="/" element={<GoogleSignInButton />} /> {/* Use element prop for component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
