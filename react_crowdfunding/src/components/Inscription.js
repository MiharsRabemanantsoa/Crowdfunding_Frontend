
import {Component} from 'react';
import UserService from "../services/UserService";
import baobab from '../image/baobab4.jpg'
import logo_final from '../image/logo_final.png'


class Inscription extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            motDePasse: "",
            successful: false,
        };
        this.nomChange = this.nomChange.bind(this);
        this.prenomChange = this.prenomChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.motDePasseChange = this.motDePasseChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    nomChange(e){
        this.setState({nom: e.target.value})
    }
    prenomChange(e){
        this.setState({prenom: e.target.value})
    }
    emailChange(e){
        this.setState({email: e.target.value})
    }
    motDePasseChange(e){
        this.setState({motDePasse: e.target.value})
    }
    handleRegister(e){
        e.preventDefault();
        this.setState({
            successful: false,
        });
    }


render() {
    return (
        <div className="Inscription">
            <div className="loader">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="pre-box-one">
                            <div className="pre-box-two"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-form-area">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-6 p-0">
                            <div className="user-img">
                                <img src={baobab} alt="User"/>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="user-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="user-content-inner">
                                            <div className="top">
                                                <a href="index.html">
                                                    <img src={logo_final} className="logo-one" alt="Logo"/>
                                                </a>
                                                <h2>Inscrivez-vous</h2>
                                            </div>
                                            <form method="POST">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input value={this.state.nom}
                                                                   onChange={this.nomChange}
                                                                   type="text" className="form-control"
                                                                   placeholder="Nom"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input value={this.state.prenom}
                                                                   onChange={this.prenomChange}
                                                                   type="text" className="form-control"
                                                                   placeholder="Prénom"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input value={this.state.email} onChange={this.emailChange} type="email" className="form-control"
                                                                   placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input value={this.state.motDePasse} onChange={this.motDePasseChange} type="password" className="form-control"
                                                                   placeholder="Mot de passe"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button type="submit"
                                                                className="btn common-btn">S'inscrire
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="bottom">
                                                <p>Vous avez déjà un compte? <a href="connexion">Se connecter</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="go-top">
                <i className="bi bi-arrow-up-short"></i>
                <i className="bi bi-arrow-up-short"></i>
            </div>
        </div>
    );
}


}
export default Inscription;


