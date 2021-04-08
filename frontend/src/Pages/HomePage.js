import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomePage(props) {
    return    <ul className="items">
    {
      /* dinamic list of items*/
      data.products.map(product =>
      <li>
        <div className="item">
        <Link to={"/item/" + product._id} alt="item">
        <img className="itemImage" src={product.image} alt="product item"></img>
        </Link>
 
            <div className="itemName">
              <Link to={"/item/" + product._id} alt="item">{product.name}</Link></div>
            <div className="itemBrand">{product.brand}</div>
            <div className="itemPrice">{product.price}</div>
            <div className="itemReview">{product.rating} Stars ({product.numReviews})</div>           
      </div>       
  </li>)
    }
</ul>
}

export default HomePage;