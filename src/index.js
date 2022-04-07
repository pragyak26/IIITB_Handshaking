import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import FindRooms from './FindRooms';




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
   
   
    {/* <Signup /> */}
    {/* <AlumniHomePage/> */}
    {/* <StudentHomePage/> */}
    <FindRooms />

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
