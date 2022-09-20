
import './App.css';
import React, {Component} from "react";
// import Inscription from "./components/Inscription";


// import Navbar from './Components/Navbar';
// import logo_clair from './logo_clair.png';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Accueil from './Components/Accueil';
import LesProjets from './Components/LesProjets';
// import LesProjets from './Components/LesProjets';
import Login from './Components/login';
import AcceuilClt from './Components/AcceuilClt';
import Admin from './Components/Admin';
import ListProjet from './Components/ListProjet';
import AboutProject from './Components/AboutProject';
import Inscription from './Components/Inscription';



function App() {
  return (
    <Router>
    <div className="Container">
        
        <Routes> 
            <Route path='/allproject' element={<LesProjets />}/>
            {/* <Route  path='/andrana' element={<Andrana />}/>     */}
        <Route path='/' element={<Accueil/>} />
        {/* <Route path='/allproject' element={<LesProjets/>}/> */}
        <Route path='/signin' element={<Login/>}     />
        <Route path='/signup' element={<Inscription/>} />
        <Route path='/home' element={<AcceuilClt/>} />
        <Route path='/listProjet' element={<ListProjet/>}/>
        <Route path='/AboutProjectall/:idProjetPath' element={<AboutProject/>} />
        <Route path='/loop/admin' element={<Admin/>} />

        </Routes>

        <div className="go-top">
            <i className="bi bi-arrow-up-short"></i>
            <i className="bi bi-arrow-up-short"></i>
        </div>
    </div>
    </Router>
  );
}
export default App;
