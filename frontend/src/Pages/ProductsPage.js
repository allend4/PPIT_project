import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { signin } from '../actions/userActions';
import { listProducts, saveProduct, deleteProduct } from '../actions/productActions';

function ProductsPage(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [inStockCounter, setInStockCounter] = useState('');
    const [description, setDescription] = useState('');

    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;

    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave, } = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete, } = productDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());//refresh the data
        return () => {
            // error
        };
    }, [successSave, successDelete]);

    //product function as parameter
    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setInStockCounter(product.inStockCounter);
        //setRating(product.Rating); // Rating partb of next update
        //setNumReviews(product.numReviews); // reviews also part of next update

    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({ _id: id, name, price, image, brand, category, inStockCounter, description }));
    }
    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    }

    return <div className="content content-margined">
        <div className="productHeader">
            <h3>Products</h3>
            {/* open modal when user click on Create Product with empty Object */}
            <button className="button primary" onClick={() => openModal({})}>
                Create Product
        </button>
        </div>

        {modalVisible &&
            <div className="form">
                <form onSubmit={submitHandler} >
                    <ul className="formContainer">
                        <li>
                            <h2>Create Product</h2>
                        </li>
                        <li>
                            {loadingSave && <div>Loading...</div>}
                            {errorSave && <div>{ errorSave }</div>}
                        </li>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={ name } id="name" onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="price">Price</label>
                            <input type="text" name="price" value={ price } id="price" onChange={(e) => setPrice(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="image">Image</label>
                            <input type="text" name="image" value={ image } id="image" onChange={(e) => setImage(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="brand">Brand</label>
                            <input type="text" name="brand" value={ brand } id="brand" onChange={(e) => setBrand(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="brand">inStockCounter</label>
                            <input type="text" name="inStockCounter" value={ inStockCounter } id="inStockCounter" onChange={(e) => setInStockCounter(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="name">Category</label>
                            <input type="text" name="category" value={ category } id="category" onChange={(e) => setCategory(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" value={ description } id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                        </li>

                        <li>
                            <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
                        </li>

                        <li>
                            <button type="button" onClick={ () => setModalVisible(false) } className="button secondary" > Back </button>
                        </li>
                    </ul>
                </form>

            </div >

        }
        <div className="product-list">

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (<tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            {/*user edit product*/}
                            <button className="button" onClick={() => openModal(product)}>Edit</button>
                            {''}{/*space between buttons*/}
                            <button className="button" onClick={() => deleteHandler(product)} >Delete</button>
                        </td>
                    </tr>))}
                </tbody>

            </table>
        </div>
    </div>
}

export default ProductsPage;