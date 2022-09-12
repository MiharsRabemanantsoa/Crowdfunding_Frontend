
import {Component} from 'react';
import UserService from "../UserService";
import swal from "sweetalert";
import baobab from '../image/baobab4.jpg';
import logo_final from '../image/logo_final.png';



class Inscription extends Component{
    constructor(props) {
        super(props)

        this.state = {
            nom: '',
            prenom: '',
            email: '',
            motDePasse: '',
        }

        this.nomChange = this.nomChange.bind(this);
        this.prenomChange = this.prenomChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.motDePasseChange = this.motDePasseChange.bind(this);
        this.saveUser = this.saveUser.bind(this)
    }

    nomChange = (event) => {
        this.setState({nom: event.target.value})
    }
    prenomChange = (event) => {
        this.setState({prenom: event.target.value})
    }
    emailChange = (event) => {
        this.setState({email: event.target.value})
    }
    motDePasseChange = (event) => {
        this.setState({motDePasse: event.target.value})
    }
    saveUser = (e) => {
        e.preventDefault();
        const user = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            motDePasse: this.state.motDePasse
        }
        UserService.createUser(user)
            .then(res => {
            this.props.history.push('/users');
            swal({
                title: "Enregistré!",
                icon: "success",
                timer: 2000,
                button: false
            })
            this.setState({redirect: this.state.redirect === false});
        })
            .catch(err => {
                console.log(err)
        });
    }

    render() {
    return (
        <div className="Inscription">
            <div className="loader">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="pre-box-one">
                            <div className="pre-box-two"/>
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
                                                            <input name="nom"
                                                                   value={this.state.nom}
                                                                   onChange={this.nomChange}
                                                                   type="text"
                                                                   className="form-control"
                                                                   placeholder="Nom"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input name="prenom"
                                                                   value={this.state.prenom}
                                                                   onChange={this.prenomChange}
                                                                   type="text"
                                                                   className="form-control"
                                                                   placeholder="Prénom"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input name="email"
                                                                   value={this.state.email}
                                                                   onChange={this.emailChange}
                                                                   type="email"
                                                                   className="form-control"
                                                                   placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input name="motDePasse"
                                                                   value={this.state.motDePasse}
                                                                   onChange={this.motDePasseChange}
                                                                   type="password"
                                                                   className="form-control"
                                                                   placeholder="Mot de passe"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button type="submit" className="btn common-btn" onClick={this.saveUser}>S'inscrire
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="bottom">
                                                <p>Vous avez déjà un compte? <a href="Connexion.js">Se connecter</a></p>
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
                <i className="bi bi-arrow-up-short"/>
                <i className="bi bi-arrow-up-short"/>
            </div>
        </div>
    );
}


}
export default Inscription;


