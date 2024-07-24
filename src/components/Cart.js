import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [cashAmount, setCashAmount] = useState('');

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePaymentMethodChange = (method) => {
    console.log(Changing payment method to: ${method});
    setPaymentMethod(method);
    setPaymentStatus(null); // Reset payment status on method change
  };

  const handleConfirmPayment = () => {
    // Validate input based on payment method
    if (paymentMethod === 'card' && (cardNumber === '' || pin === '')) {
      alert('Please enter a valid card number and PIN.');
      return;
    }
    if (paymentMethod === 'cash' && (cashAmount === '' || parseFloat(cashAmount) < totalAmount)) {
      alert(Please enter a valid cash amount (at least $${totalAmount.toFixed(2)}).);
      return;
    }

    // Simulate payment confirmation
    console.log('Payment Method:', paymentMethod);
    console.log('Card Number:', cardNumber);
    console.log('PIN:', pin);
    console.log('Cash Amount:', cashAmount);
    setPaymentStatus('success');
  };

  const handleGoBack = () => {
    setPaymentMethod(null);
    setPaymentStatus(null);
    setCardNumber('');
    setPin('');
    setCashAmount('');
    // Clear cart items
    removeFromCart(null, true); // Assuming removeFromCart can handle clearing all items
  };

  return (
    <div className="cart">
      {paymentStatus === 'success' ? (
        <div className="payment-success">
          <h2>Thank You!</h2>
          <p>Your payment was successful.</p>
          <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
        </div>
      ) : (
        <>
          <h2>Cart <i className="fas fa-shopping-cart"></i></h2>
          {cartItems.length === 0 ? (
            <p className="no-items">No items in cart.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                      <i className="fas fa-trash-alt"></i> Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-summary">
                <h3>Billing Summary</h3>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                <button
                  className="checkout-button"
                  onClick={() => handlePaymentMethodChange('cash')}
                >
                  Checkout with Cash
                </button>
                <button
                  className="checkout-button"
                  onClick={() => handlePaymentMethodChange('card')}
                >
                  Checkout with Card
                </button>
              </div>
              {paymentMethod === 'card' && (
                <div className="payment-form">
                  <h3>Credit Card Payment</h3>
                  <label>
                    Card Number:
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Card Number"
                    />
                  </label>
                  <label>
                    PIN:
                    <input
                      type="password"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      placeholder="PIN"
                    />
                  </label>
                  <button className="confirm-button" onClick={handleConfirmPayment}>Confirm Payment</button>
                </div>
              )}
              {paymentMethod === 'cash' && (
                <div className="payment-summary">
                  <h3>Cash Payment</h3>
                  <label>
                    Cash Amount:
                    <input
                      type="number"
                      value={cashAmount}
                      onChange={(e) => setCashAmount(e.target.value)}
                      placeholder={Total: $${totalAmount.toFixed(2)}}
                    />
                  </label>
                  <button className="confirm-button" onClick={handleConfirmPayment}>Confirm Payment</button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;