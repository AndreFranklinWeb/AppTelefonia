import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';


import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';



function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgTipo, setMsgTipo] = useState('');

    const dispatch = useDispatch();    

    function logar() {

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso'); //Se for logado apresenta essa mensagem.
            setTimeout(()=>{
                dispatch({type: 'LOG_IN', usuarioEmail:email})
            }, 2000);
            
        }).catch(Error => {
            setMsgTipo('erro');
        });
        
    }

    

    return (

        <div className="login-content d-flex align-itens-center">

            {useSelector (state => state.usuarioLogado) > 0 ? <Redirect to = '/' /> : null}
            
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    {/*<img className="#" src="#" alt="" width="72" height="72" /> */}
    <h1 className="h3 mb-3 font-weight-normal font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-3" placeholder="Senha" />

                <button onClick={logar} class="btn btn-lg btn btn-block btn-login font-weight-bold" type="button">Entrar</button>

                <div className="msg-login  text-center my-3">
                    {msgTipo === 'sucesso' && <span className="text-success"><strong>Você está conectado! &#128521;</strong></span>}
                    
                    {msgTipo === 'erro' && <span className="text-danger"><strong>Verifique se Usuário ou Senha estão corretos! &#128546;</strong></span>}                       
                </div>

                <div className="opçoes-login mt-2 text-center font-weight-bold">
                    <Link to="#" className="mx-2">Recuperar Senha</Link>
                    <span className="text-secondary">&#9830;</span>
                    <Link to="novousuario" className="mx-2">Quero Cadastrar</Link>
                    <p class="mt-5 mb-3 text-muted text-center">Desenvolvido por <strong>FKL - Sistemas e Sites</strong> &copy; 2020</p>
                </div>
            </form>
        </div>
    )
}

export default Login;