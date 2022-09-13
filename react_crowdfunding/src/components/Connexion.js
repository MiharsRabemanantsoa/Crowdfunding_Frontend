
import {Component} from 'react';
import baobab from "../image/baobab4.jpg"
import logo from "../image/logo_final.png"
import UserService from "../UserService";


 class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: {}
        }
    }
    componentDidMount() {
        UserService.getUsers(this.state.email).then(res => {
            this.setState({users: res.data
            });
        })
    }

    render() {
    return (
        <div className="Connexion">
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
                                             <img src= {logo} className="logo-one" alt="Logo"/>
                                        </a>
                                        <h2>Connectez-vous</h2>
                                    </div>
                                <form method="GET">
                                    <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email"
                                                   value={this.state.users.email}
                                                   className="form-control"
                                                   placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="password"
                                                   value={this.state.users.motDePasse}
                                                   className="form-control"
                                                   placeholder="Mot de passe"/>
                                        </div>
                                    </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="btn common-btn">Connexion</button>
                                        </div>
                                    </div>
                                </form>
                                    <div className="bottom">
                                        <p>Vous n'avez pas de compte? <a href="Inscription.js">S'inscrire</a></p>
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
export default Register;
