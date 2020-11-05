import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './usuario-novo.css';

function NovoUsuario() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgTipo, setMsgTipo] = useState('');
    const [msg, setMsg] = useState('');

    function cadastrar() {
        setMsgTipo(null);

        if (!email || !senha) {
            setMsgTipo('erro')
            setMsg('Você precisa informar email e senha para fazer o cadastro!')
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso')
        }).catch(erro => {
            setMsgTipo('erro')
            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres');
                    break;

                case 'The email address is already in use by another account.':
                    setMsg('O endereço de e-mail já está sendo usado por outro usuário.');
                    break;

                case 'The email address is badly formatted.':
                    setMsg('Endereço de e-mail está formatado incorretamente.');
                    break;

                default:
                    setMsg('Não foi possivel cadastrar. Tente novamente mais tarde!');
                    break;
            }
        })
    }

    return (
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-black font-weight-bold'>Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

                <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>

                <div className="msg-login text-center my-5">
                    {msgTipo === 'sucesso' && <span className="text-success"> <strong> WoW!</strong>Usuário cadastrado com sucesso! &#128521;</span>}
                    {msgTipo === 'erro' && <span className="text-danger"><strong>Ops!</strong> {msg} &#128546;</span>}
                </div>

            </form>

        </div>
    )
}

export default NovoUsuario;