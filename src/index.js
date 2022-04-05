import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Routes,Route,Router} from 'react-router-dom';
import AlumniHomePage from './AlumniHomePage';
import StudentHomePage from './StudentHomePage';
import Header from './Header';



ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* < Login /> */}
   
    {/* <Signup /> */}
    {/* <AlumniHomePage/> */}
    {/* <StudentHomePage/> */}
    

    {/* <BrowserRouter>
<Routes>
<Route path="" element={<Signup />} />
<Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter> */}

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
