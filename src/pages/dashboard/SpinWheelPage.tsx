import React, { useState } from 'react';
// import QRCodeGenerator from './QrCodeGenerator';
import {Container, Button} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { PATH_DASHBOARD } from '../../routes/paths';
import { useSnackbar } from '../../components/snackbar';
import './spinwheel.css';


const DiscountWheel: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
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
      enqueueSnackbar(`Congretulation! you won ${selectedCoupon}discount`);
      setIsSpinning(false);
    }, 2000);

    // enqueueSnackbar("aaa");
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText(couponCode);
    setIsCopied(true);
  };
  const { themeStretch } = useSettingsContext();


  return (
    <>
      <Helmet>
          <title> Ecommerce: Create a new product | Minimal UI</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'lg'}>
          <CustomBreadcrumbs
          heading="Discount Spin Wheel of Fortune"
          links={[
              { name: 'Dashboard', href: PATH_DASHBOARD.root },
              {
              name: 'Extra',
              href: PATH_DASHBOARD.extra.root,
              },
              { name: 'Coupon' },
          ]}
          />
          <div>
            <Button variant='contained' color='primary' onClick={spinWheel} disabled={isSpinning}>
              Spin the Wheel
            </Button>
            {isSpinning && <div className="spinner" />}
            {!isSpinning && selectedDiscount && (
              <>
                  {/* <h4>Congratulations! You won {selectedDiscount} discount!</h4> */}
                  <div>
                  <p>{couponCode}</p>
                  <Button variant='contained' onClick={copyCouponCode} color='primary'>
                    {isCopied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </>
              
            )}
            {/* <QRCodeGenerator
              productId="12345"
              price={10.99}
              count={3}
              amount={32.97}
            /> */}
          </div>
      </Container>
      
    </>
    
  );
};

export default DiscountWheel;