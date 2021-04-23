import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductPage(props) {
    //console.log(props.match.params.id); // checks product id registers on console
    // const product = data.products.find(x => x._id === props.match.params.id);
    const productDetails = useSelector((state) => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    //const productId = props.match.params.id;
    const [qty, setQty] = useState(1); // default value 1

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [dispatch])

    const handleAddTobasket = () => { props.history.push("/basket/" + props.match.params.id + "?qty=" + qty) }

    return <div>
        <div className="backToResult">
            <Link to="/">Back to result</Link>
        </div>
        {loading ? <div>Loading...</div> :
            error ? <div>{error}</div> :
                (
                    <div className="details">
                        <div className="detailsImage">
                            <img src={product.image} alt="product"></img>

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
                                <li>Status: {product.inStockCounter > 0 ? "In Stock" : "Out of Stock"}</li>
                                <li>Qty:
                                    <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                        {[...Array(product.inStockCounter).keys()].map(x => <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                    </select>
                                </li>
                                <li>
                                    {product.inStockCounter > 0 && <button onClick={handleAddTobasket} className="button primary">Add to Basket</button>}
                                </li>
                            </ul>
                        </div>
                    </div>
                )
        }
    </div>
}

export default ProductPage;