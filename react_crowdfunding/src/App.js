
import './App.css';
import React, {Component} from "react";
// import Inscription from "./components/Inscription";


// import Navbar from './Components/Navbar';
import logo_final from './logo_final.png';
// import logo_clair from './logo_clair.png';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Accueil from './Components/Accueil';
import LesProjets from './Components/LesProjets';
import Inscription from './Components/Inscription';


function App() {
  return (
    <Router>
        <div className="Container">
        
        {/* <Navbar></Navbar> */}
        
        {/* <div className="loader">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="pre-box-one">
                                <div className="pre-box-two"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

            <div className="navbar-area sticky-top">

        {/* <div className="mobile-nav">
            <Link to="/home" className="logo">
                <img src={logo_clair} alt="Logo"/>
            </Link>
        </div> */}
    
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="/home">
                            <img src={logo_final} className="logo-one" alt="Logo"/>
                        </Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link active">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projets" className="nav-link">Tous les projets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Apropos" className="nav-link">A propos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactUs" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <div className="side-nav">
                            <Link className="nav-link" to="/singin">Se connecter</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
        <Routes>
     <Route path='/' element={<Accueil/>} />
        <Route path='/allproject' element={<LesProjets/>}/>
     <Route path='/singin' element={<Inscription/>}  />
        </Routes>
     

        <div className="go-top">
            <i className="bi bi-arrow-up-short"></i>
            <i className="bi bi-arrow-up-short"></i>
        </div>

    </Router>
  );

}
export default App;
