import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductPage(props) {
    console.log(props.match.params.id); // checks product id registers on console
    const product = data.products.find(x => x._id === props.match.params.id);
        return <div>
            <div className="backToResult">
                <Link to="/">Back to result</Link>
            </div>
            <div className="details">
                <div className="detailsImage">
                    <img src={product.image} alt="product image"></img>
                </div>
                <div className="detailsInfo"> 
                    <ul>
                        <li><h4>{product.name}</h4></li>
                        <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
                        <li>Price:<b>€{product.price}</b></li> 
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="detailsExtra">
                    <ul>
                        <li>Price: {product.price}</li>
                        <li>Status: {product.status}</li>
                        <li>Qty: 
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </li>
                        <li><button className="detailsButton">Add to Basket</button></li>
                    </ul>
                </div>
            </div>
        </div>
}

export default ProductPage;