import React from 'react';
import './App.css'
import Routes from './routes';

function App (){
    return (
        <div className="container">
          <head>cadastro</head>
    
          <div className="form">
            <p>
              Cadastre-se e conheça os  <strong>melhores pacotes de viagem</strong> para você 
          </p>
            <form >
              <label >NOME *</label>
              <input type='text' id='Nome' placeholder='digite seu nome'/>
              <label htmlFor="email">E-MAIL *</label>
              <input
                type="email" id="email"
                placeholder="digite seu e-mail" />
                <label >SENHA *</label>
              <input type='password' id='senha' placeholder='digite sua senha'/>
              <label >CONFIRME A SENHA *</label>
              <input type='password' id='confimarSenha' placeholder='digite novamente sua senha'/>
              <button className="btn" type="submit">Entrar</button>
            </form>
          </div>
        </div>
      );
};

export default App;
