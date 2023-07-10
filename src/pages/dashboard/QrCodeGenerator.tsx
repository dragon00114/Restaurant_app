import React from 'react';
import QRCode from 'qrcode.react';


type QRCodeProps = {
    productId: string;
    price: number;
    count: number;
    amount: number;
  };
  
const QRCodeGenerator: React.FC<QRCodeProps> = ({ productId, price, count, amount }) => {
const qrCodeData = `Product ID: ${productId}\nPrice: ${price}\nCount: ${count}\nAmount: ${amount}`;

return (
    <div>
        <QRCode value={qrCodeData} />
    </div>
);
};

export default QRCodeGenerator;