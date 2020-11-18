import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//Paginas
import Login from './View/Login';
import NovoUsuario from './View/usuario-novo';
import Home from './View/home/index.js';


function App() {
  return (
    <Router>
      <Route exact path='/' component={ Home } />      
      <Route exact path='/novousuario' component={ NovoUsuario } />
      <Route exact path='/Login' component={ Login } />
    </Router>
  );
}

export default App;
