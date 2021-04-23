import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { addTobasket, removeFrombasket } from '../actions/basketActions';
import CheckoutOptions from '../components/CheckoutOptions';

function PlaceholderPage(props) {

    const basket = useSelector(state => state.basket);

    const { basketItems, shipping, payment } = basket;

    if (!shipping.address) {
        props.history.push("/shipping");
    }
    else if (!payment.paymentMethod) {
        props.history.push("/payment");
    }

    const productPrice = basketItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = productPrice > 100 ? 0 : 10; // Shipping cost
    const vatPrice = 0.23 * productPrice; // VAT 23%
    const totalPrice = productPrice + shippingPrice; // VAT already included in cost

    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        // create an order
    }
    useEffect(() => {

    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }

    return <div>
        <CheckoutOptions step1 step2 step3 step4 ></CheckoutOptions>
        <div className="placeorder">
            <div className="placeorderInfo">
                <div>
                    <h3>
                        Shipping
                    </h3>
                    <div>
                        {basket.shipping.address}, {basket.shipping.city},
          {basket.shipping.postalCode}, {basket.shipping.country},
          </div>
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        Payment Method: {basket.payment.paymentMethod}
                    </div>
                </div>
                <div>
                    <ul className="basketListContainer">
                        <li>
                            <h3>
                                Shopping basket
                            </h3>
                            <div>
                                Price
                            </div>
                        </li>
                        {
                            basketItems.length === 0 ?
                                <div>
                                    basket is empty
                                </div>
                                :
                                basketItems.map(item =>
                                    <li>
                                        <div className="basketImage">
                                            <img src={item.image} alt="product" />
                                        </div>
                                        <div className="basketName">
                                            <div>
                                                <Link to={"/product/" + item.product}>
                                                    {item.name}
                                                </Link>

                                            </div>
                                            <div>
                                                Qty: {item.qty}
                                            </div>
                                        </div>
                                        <div className="basketPrice">
                                            €{item.price}
                                        </div>
                                    </li>
                                )
                        }
                    </ul>
                </div>


            </div>
            <div className="placeorderAction">
                <ul>
                    <li>
                        <button className="button primary full-width" onClick={placeOrderHandler} >Place Order</button>
                    </li>
                    <li>
                        <h3>Order Summary</h3>
                    </li>
                    <li>
                        <div>Items</div>
                        <div>€{productPrice}</div>
                    </li>
                    <li>
                        <div>Shipping</div>
                        <div>€{shippingPrice}</div>
                    </li>
                    <li>
                        <div>VAT included</div>
                        <div>€{vatPrice}</div>
                    </li>
                    <li>
                        <div>Order Total</div>
                        <div>€{totalPrice}</div>
                    </li>
                </ul>



            </div>

        </div>
    </div>

}

export default PlaceholderPage;