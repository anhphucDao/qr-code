import React from 'react';
// import QrImg from '../assets/qr-code.png';
import { ReactComponent as QrSvg } from '../assets/qrCode.svg';

export default function QrImage() {
    return (
        <div className="w-[280px] h-[280px] rounded-[16px] absolute top-[18px] left-1/2 transform -translate-x-1/2 h transition-transform duration-700 ease-in-out hover:scale-105 hover:brightness-150 ">
            <QrSvg />
        </div>
    );
}
