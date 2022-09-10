
import './App.css';



import logo_final from './logo_final.png'
import logo_clair from './logo_clair.png';
import {Route, BrowserRouter as Router, Routes, Link, } from 'react-router-dom';
import ListProjet from './Components/ListProjet';
import './App.css';
import Acceuil from './Components/Acceuil';


function App() {
  return (
<div className="App">
<Router>
    <div className="navbar-area sticky-top">

        <div className="mobile-nav">
            <a href="index.html" className="logo">
                <img src={logo_clair} alt="Logo"/>
            </a>
        </div>
    
        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logo_final} className="logo-one" alt="Logo"/>
                    </Link>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                    
                    

                        <ul className="navbar-nav">
                            
                            <li className="nav-item">                               
                                <Link to= "/home" className="nav-link active">Accueil</Link>
                            </li>
                            <li className="nav-item">                               
                                <Link to= "/listProjet" className="nav-link ">Tous les projets</Link>
                            </li>
                            <li className="nav-item">                             
                                <Link to= "/a_propos" className="nav-link ">A propos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= "/contact" className="nav-link ">Contact</Link>
                            </li>
                        </ul>
                        <div className="side-nav">
                            <Link to= "/connexion-btn" className="nav-link ">Se connecter</Link>
                        </div>                  
                        
                        
                    </div>
                </nav>
            </div>
        </div>
    </div>
     
      <Routes>
                        <Route  path='/' element={<Acceuil/>}/>
                        <Route  path='/listProjet' element={<ListProjet/>}/>
                        </Routes>
      </Router>

      <div className="go-top">
        <i className="bi bi-arrow-up-short"></i>
        <i className="bi bi-arrow-up-short"></i>
      </div>
      
    </div>
    
  );

}

export default App;
