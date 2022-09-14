
import './App.css';

// import Navbar from './Components/Navbar';
// import logo_clair from './logo_clair.png';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Accueil from './Components/Accueil';
import LesProjets from './Components/LesProjets';
import Login from './Components/login';
import AcceuilClt from './Components/AcceuilClt';
import Admin from './Components/Admin';

function App() {
  return (
    <Router>
    <div className="Container">
        <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/allproject' element={<LesProjets/>}/>
        <Route path='/signin' element={<Login/>}     />
        <Route path='/home' element={<AcceuilClt/>} />
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
