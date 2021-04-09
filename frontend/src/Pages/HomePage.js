import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data'; // dont need static data
import axios from 'axios';

function HomePage(props) {

  const [products, setProduct] = useState([]);

  useEffect (() => {
    const fetchdata = async () => {
      const {data} = await axios.get("api/products");
      setProduct(data);
    }
    fetchdata(); // pulling data from server
    return () => {
      //
    };
  }, [])

    return    <ul className="items">
    {
      /* dinamic list of items*/
      products.map(product =>
      <li key={product._id}>
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