import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../Actions.js/auth";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

class LoginRedux extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMotDePasse = this.onChangeMotDePasse.bind(this);
        this.state = {
          email: "",
          motDePasse: "",
          loading: false,
        };
      }

      onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
        console.log(this.state.email);
      }

      onChangeMotDePasse(e) {
        this.setState({
          motDePasse: e.target.value,
        });
        console.log(this.state.motDePasse);
      }

      handleLogin(e) {
        e.preventDefault();
        this.setState({
          loading: true,
        });      

        this.form.validateAll();
        
        const { dispatch, history } = this.props;

        if (this.checkBtn.context._errors.length === 0) {
          dispatch(login(this.state.email, this.state.motDePasse))
            .then(() => {
              history.push("/allproject");
              window.location.reload();
            })
            .catch(() => {
              this.setState({
                loading: false
              });
            });
        } else {
          this.setState({
            loading: false,
          });
        }
      }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Navigate to="/" />;
    }

    return (
        <div className="user-form-area">
                <div className="container-fluid p-0">
                     <div className="row m-0">
                     <div className="col-lg-6 p-0">
                     <div className="user-img">
                     <img src="img/Images/baobab4.jpg" alt="User"/>
                     </div>
                     </div>
                         <div className="col-lg-6 p-0">
                             <div className="user-content">
                                 <div className="d-table">
                                     <div className="d-table-cell">
                                         <div className="user-content-inner">
                                             <div className="top">
                                                 <a href="index.html">
                                                     <img src="img/logo_final.png" className="logo-one" alt="Logo"/>
                                                </a>
                                                 <h2>Connectez-vous</h2>
                                             </div>
                                             <Form onSubmit={this.handleLogin}ref={(c) => {this.form = c; }}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                     <div className="form-group">
                                                        <Input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            value={this.state.email}
                                                            onChange={this.onChangeEmail}
                                                            validations={[required]}
                                                             />
                                                     </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <Input
                                                                type="password"
                                                                className="form-control"
                                                                name="motDePasse"
                                                                value={this.state.motDePasse}
                                                                onChange={this.onChangeMotDePasse}
                                                                validations={[required]}
                                                                 />
                                                        </div>
                                                    </div>
                                                <div className="col-lg-12">
                                             
                                                <button className="btn common-btn" disabled={this.state.loading}>
                                                    {this.state.loading && (<span className="spinner-border spinner-border-sm"></span>)}
                                                    <span>Connexion</span>
                                                </button>
                                         </div>
                                     </div>
                                     {message && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                            {message}
                                            </div>
                                        </div>
                                       )}
                                    <CheckButton style={{ display: "none" }} ref={(c) => { this.checkBtn = c;}}/>
                                 </Form>
                                     <div className="bottom">
                                         <p>Vous n'avez pas de compte ? <a href="inscription.html">S'inscrire</a></p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(LoginRedux);
