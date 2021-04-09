import React, { useEffect } from 'react';
//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data'; // dont need static data
//import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomePage(props) {

  //const [products, setProduct] = useState([]);
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect (() => {
    //const fetchdata = async () => {
    //const {data} = await axios.get("api/products");
    //setProduct(data);
    //}
    //fetchdata(); // pulling data from server
    dispatch(listProducts());
    return () => {
      //
    };
  }, [dispatch])

    return  loading? <div>Loading...</div>: 
            error? <div>{ error }</div>: 
    
    <ul className="items">
    {
      /* dinamic list of items*/
      products.map(product =>
      <li key={product._id}>
        <div className="item">
        <Link to={"/product/" + product._id} alt="item">
        <img className="itemImage" src={product.image} alt="product item"></img>
        </Link>
 
            <div className="itemName">
              <Link to={"/product/" + product._id} alt="item">{product.name}</Link></div>
            <div className="itemBrand">{product.brand}</div>
            <div className="itemPrice">{product.price}</div>
            <div className="itemReview">{product.rating} Stars ({product.numReviews})</div>           
      </div>       
  </li>)
    }
</ul>
}

export default HomePage;