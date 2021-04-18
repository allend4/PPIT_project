import React from 'react';
import { useSelector } from 'react-redux';
//import logo from './logo.svg';
//import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import SigninPage from './Pages/signinPage';
import RegisterPage from './Pages/RegisterPage';
import ProductsPage from './Pages/ProductsPage';
//import { userSigninReducer } from './Reducers/userReducers';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

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
          <a href="cart.html">Basket</a> &nbsp;
          {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }         
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
          <Route path="/products" component={ProductsPage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
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
