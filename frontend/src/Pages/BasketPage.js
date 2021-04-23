import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTobasket, removeFrombasket } from '../actions/basketActions';

function BasketPage(props) {
  const basket = useSelector(state => state.basket);

  const { basketItems } = basket;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFrombasketHandler = (productId) => {
    dispatch(removeFrombasket(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addTobasket(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return <div className="basket">
    <div className="basketList">
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
                    Qty:
                  <select value={item.qty} onChange={(e) => dispatch(addTobasket(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    <button type="button" className="button" onClick={() => removeFrombasketHandler(item.product)} >
                      Delete
                    </button>
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
    <div className="basketAction">
      <h3>
        Subtotal ( {basketItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         € {basketItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <button onClick={checkoutHandler} className="button primary full-width" disabled={basketItems.length === 0}>
        Proceed to Checkout
      </button>

    </div>

  </div>
}

export default BasketPage;