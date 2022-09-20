import React, { useState, useRef }  from 'react';
import AuthService from "../Services/AuthService";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button";
import Users from '../Modèle/Users';
import { isEmail } from "validator";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Le champs ne peut pas être vide 
        </div>
      );
    }
  };
  const email = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          entrez un email valide
        </div>
      );
    }
  };

function Login () {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [emailUser, setEmailUser] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        const username = e.target.value;
        setEmailUser(username);
      };

      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

      const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(emailUser,password).then(
              (response) => {
                if(!response.data){                    
                    setMessage("mot de passe ou email incorrect");
                    setLoading(false);
                   
                }else{
                    setLoading(false);
                    setMessage("Vous êtes connecté");
                    Users.user = response.data;
                    if(response.data.role.name === "ROLE_USER"){                        
                        setMessage("Vous êtes un user "+Users.user.nom);
                        navigate("/home", {replace: true});
                        window.location.reload();            
                    } else {
                        setMessage("Vous êtes un admin "+Users.user.nom);
                        navigate("/loop/admin", {replace: true});
                        window.location.reload(); 
                    }
                }                
              },
              error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                  setLoading(false);
                  setMessage(resMessage);
                }
            );
          } else {
            setLoading(false);
          }
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
                                <Form onSubmit={handleLogin} ref={form}>
                                    <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <Input type="text"
                                                    className="form-control"
                                                    name="email"
                                                    value={emailUser}
                                                    onChange={onChangeEmail}
                                                    validations={[required,email]}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <Input type="password"
                                                className="form-control"
                                                name="password"
                                                value={password}
                                                onChange={onChangePassword}
                                                validations={[required]}/>
                                        </div>
                                    </div>
                                        <div className="col-lg-12">
                                            {/* <button type="submit" class="btn common-btn">Connexion</button> */}
                                            <button
                                                className="btn common-btn"
                                                disabled={loading}
                                                type='submit'
                                            >
                                            {loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
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
                                    <CheckButton  style={{ display: "none" }} ref={checkBtn}/>
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

    )
}

export default Login ;
