import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../actions/basketActions';
import CheckoutOptions from '../components/CheckoutOptions';

function PaymentPage(props) {

  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  }
  return <div>
    <CheckoutOptions step1 step2 step3 ></CheckoutOptions>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="formContainer">
          <li>
            <h2>Payment</h2>
          </li>
          <li>
            <div>
              <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal"
                onChange={(e) => setPaymentMethod(e.target.value)}>
              </input>
              <label htmlFor="paymentMethod">
                Paypal
          </label>
            </div>
          </li>
          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>
        </ul>
      </form>
    </div>
  </div>

}
export default PaymentPage;