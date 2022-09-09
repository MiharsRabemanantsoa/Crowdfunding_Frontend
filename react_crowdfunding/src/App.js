
import './App.css';



import logo_final from './logo_final.png'
import logo_clair from './logo_clair.png';
// import AcceuilClt from './Components/AcceuilClt';
// import ListProjet from './Components/ListProjet';
import {Route, BrowserRouter as Router, Routes, Link, } from 'react-router-dom';
import ListProjet from './Components/ListProjet';
import './App.css';
import Acceuil from './Components/Acceuil';


function App() {
//     const navigate = useNavigate();

// const navigateToListProjet = () => {
//     navigate('/ListPRojet');
// };

// const navigateAcceuilClt = () => {
//     navigate('/');
// };
  return (
    <div className="App">
      
          {/* <Router>
           <div className="App">
           </div>
       </Router>
       <div className="App">
    <ul>
      <li>
        <Link to="/ListProjet">Tous les projets</Link>
      </li>
    </ul>
</div>  
<Route exact path='/' element={< AcceuilClt />}></Route>
<Route exact path='/ListProjet' element={< ListProjet />}></Route>
<Routes>
    <Route exact path='/' element={< AcceuilClt />}></Route>
    <Route exact path='/ListProjet' element={< ListProjet />}></Route>
</Routes> */}
<Router>
    {/* <div className="container"> */}
    {/* <nav>
        <ul>
            <li>
                <Link to="/">AcceuilClt</Link>
                
            </li>
            <li>
            <Link to="/listProjet">Tous les projets</Link>
            </li>
        </ul>
    </nav> */}
        
        
    
{/* </div> */}




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
                                {/* <a href="index.html" className="nav-link active">Accueil</a> */}
                                <Link to= "/home" className="nav-link active">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="projets.html" className="nav-link">Tous les projets</a>  */}
                                <Link to= "/listProjet" className="nav-link ">Tous les projets</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="a_propos.html" className="nav-link">A propos</a> */}
                                <Link to= "/a_propos" className="nav-link ">A propos</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="contact.html" className="nav-link">Contact</a> */}
                                <Link to= "/contact" className="nav-link ">Contact</Link>
                            </li>
                        </ul>
                        <div className="side-nav">
                            {/* <a className="connexion-btn" href="connexion.html">Se connecter</a> */}
                            <Link to= "/connexion-btn" className="nav-link ">Se connecter</Link>
                        </div>                  
                        
                        
                    </div>
                </nav>
            </div>
        </div>
    </div>
     {/* <AcceuilClt/>
      <Banner></Banner>
      <ProjetPopulaire></ProjetPopulaire>
      <CounterArea></CounterArea>
      <BlogArea></BlogArea>
      <TousLesProjets></TousLesProjets>
      <ListProjet></ListProjet>
      <Footer></Footer> */}
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
