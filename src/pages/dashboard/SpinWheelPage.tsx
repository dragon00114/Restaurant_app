import React, { useState } from 'react';
import QRCodeGenerator from './QrCodeGenerator';

import './spinwheel.css';


const DiscountWheel: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState('');

  const [couponCode, setCouponCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const spinWheel = () => {
    const discounts = ['10% off', '20% off', '30% off', '40% off', '50% off'];
    const randomIndex = Math.floor(Math.random() * discounts.length);
    const selectedCoupon = discounts[randomIndex];
    const code = Math.random().toString(36).substring(7).toUpperCase();
    setCouponCode(`${selectedCoupon}: ${code}`);
    
    setIsCopied(false);

    setIsSpinning(true);

    // Simulating a delay for the spinning animation
    setTimeout(() => {
      setSelectedDiscount(selectedCoupon);
      setIsSpinning(false);
    }, 2000);
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText(couponCode);
    setIsCopied(true);
  };

  return (
    <div>
      <h1>Discount Spin Wheel of Fortune</h1>
      <button type='button' onClick={spinWheel} disabled={isSpinning}>
        Spin the Wheel
      </button>
      {isSpinning && <div className="spinner" />}
      {!isSpinning && selectedDiscount && (
        <>
            <h2>Congratulations! You won {selectedDiscount} discount!</h2>
            <div>
            <p>{couponCode}</p>
            <button type='button' onClick={copyCouponCode}>
              {isCopied ? 'Copied!' : 'Copy Coupon Code'}
            </button>
          </div>
        </>
        
      )}
      <QRCodeGenerator
        productId="12345"
        price={10.99}
        count={3}
        amount={32.97}
      />
    </div>
  );
};

export default DiscountWheel;