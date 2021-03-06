import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function NavBar() {

    const dispatch = useDispatch( );

    return (
        <nav className="navbar navbar-expand-lg ">
            <span className="navbar-brand text-white font-weith-bold" href="#">Telefonia</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>

            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link " to="/">Home</Link></li>

                    {
                        useSelector (state => state.usuarioLogado) > 0 ?

                            <>
                                <li className="nav-item"><Link className="nav-link " to="nav-link">Publicar Eventos</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="nav-link">Meus eventos</Link></li>
                                <li className="nav-item"><Link className="nav-link " onClick = {() => dispatch({type: 'LOG_OUT'}) }>Sair</Link></li>
                            </>
                            :
                            <>
                                <li className="nav-item"><Link className="nav-link " to="/novousuario">Cadastrar</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/Login">Login</Link></li>
                            </>
                    }

                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

