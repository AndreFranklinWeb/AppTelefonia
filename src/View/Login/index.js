import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar() {

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            alert('Usuário Logado!'); //Se for logado apresenta essa mensagem.
        }).catch(Error => {
            alert('Erro de Usuário ou Senha!');
        });
    }

    return (

        <div className="login-content d-flex align-itens-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    {/*<img className="#" src="#" alt="" width="72" height="72" /> */}
    <h1 className="h3 mb-3 font-weight-normal font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-3" placeholder="Senha" />

                <button onClick={logar} class="btn btn-lg btn btn-block btn-login font-weight-bold" type="button">Entrar</button>

                <div className="msg-login  text-center my-3">
                    <span className="text-success"><strong>Você está conectado! &#128521;</strong></span>
                    <br></br>
                    <span className="text-danger"><strong>Verifique se Usuário ou Senha estão corretos! &#128546;</strong></span>
                </div>

                <div className="opçoes-login mt-2 text-center font-weight-bold">
                    <a href="#" className="mx-2">Recuperar Senha</a>
                    <span className="text-secondary">&#9830;</span>
                    <a href="#" className="mx-2">Quero Cadastrar</a>
                    <p class="mt-5 mb-3 text-muted text-center">Desenvolvido por <strong>GoWin - Sistemas e Sites</strong> &copy; 2020</p>
                </div>
            </form>
        </div>
    )
}

export default Login;