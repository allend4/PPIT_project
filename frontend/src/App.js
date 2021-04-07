import React from 'react';
import logo from './logo.svg';
import data from './data';
import './App.css';

function App() {

  const openSideMenu = () =>{
    document.querySelector(".sideBar").classList.add("open");
  }
  const closeSideMenu = () => {
    document.querySelector(".sideBar").classList.remove("open");

  }
  return (

    <div className="container">


      <header className="header">
        <div className="sideMenu">
          <button onClick={openSideMenu}>
            &#9776;
            </button>
          <a href="index.html">IDphone</a>
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
          <ul className="items">
          {
            /* dinamic list of items*/
            data.products.map(product =>
            <li>
              <div className="item">
                <img className="itemImage" src={product.image} alt="product item"></img>
                  <div className="itemName">
                    <a href="item.html" alt="item">{product.name}</a></div>
                  <div className="itemBrand">{product.brand}</div>
                  <div className="itemPrice">{product.price}</div>
                  <div className="itemReview">{product.rating} Stars ({product.numReviews})</div>           
            </div>       
        </li>)
          }
           
           
      </ul>
        </div>    
        
    </main>

        <footer className="footer">
          copyright idphone
    </footer>

  </div>
  );
}

export default App;
