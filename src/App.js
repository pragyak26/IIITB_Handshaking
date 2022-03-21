
import './App.css';

import StudentHomePage from './StudentHomePage';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import React from "react";


import Donate from './Donate';
function App() {
  return (
    <div >
    
    <Router>
    <StudentHomePage/>
    {/* <Route path="/" component={StudentHomePage}></Route> */}

    {/* <Route path="/donate" component={Donate}></Route> */}


    
  <Route path="donate" element={<Donate />} />

   
    
  
    </Router>
    
  
  
    </div>
  );
}

export default App;
