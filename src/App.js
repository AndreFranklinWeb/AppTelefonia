import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';
//Paginas
import Login from './View/Login';
import NovoUsuario from './View/usuario-novo';
import Home from './View/home/index.js';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path='/' component={ Home } />      
      <Route exact path='/novousuario' component={ NovoUsuario } />
      <Route exact path='/Login' component={ Login } />
    </Router>
    </Provider>
  );
}

export default App;