import React from 'react';
//import logo from './logo.svg';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

function App() {

  const openSideMenu = () =>{
    document.querySelector(".sideBar").classList.add("open");
  }
  const closeSideMenu = () => {
    document.querySelector(".sideBar").classList.remove("open");

  }
  return (
    <BrowserRouter>
    <div className="container">


      <header className="header">
        <div className="sideMenu">
          <button onClick={openSideMenu}>
            &#9776;
            </button>
            <Link to="/">IDphone</Link>

        </div>
        <div className="headerMenu">
          <a href="cart.html">Cart</a> &nbsp;
          <a href="login.html">Login</a>
        </div>
      </header>

      <aside className="sideBar">
        <h3>Shopping Brands</h3>
        <button className="sideBarClose" onClick={closeSideMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Samsung</a>
          </li>
         
        </ul>
      </aside>

      <main className="main">

        <div className="product">
          <Route path="/item/:id" component={ProductPage} />
          <Route path="/" exact={true} component={HomePage} />
       
        </div>    
        
    </main>

        <footer className="footer">
          copyright idphone
    </footer>

  </div>
  </BrowserRouter>
  );
}

export default App;
