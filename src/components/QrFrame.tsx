import React from 'react';
import QrImage from './QrImage';

export default function QrFrame() {
    return (
        <div className="w-[316px] h-[484px] rounded-[16px] bg-white shadow-lg relative top-[154px] left-1/2 transform -translate-x-1/2 ">
            <QrImage />
            <div className="flex flex-col absolute top-[306px] flex-nowrap items-center left-1/2 transform -translate-x-1/2 space-y-[20px] text-center">
                <div className="text-[#1F3251]  text-[22px] w-[254px]  font-semibold ">
                    Improve your front-end skills by building projects
                </div>
                <div className="text-[#7B879D]  text-[16px] w-[244px]  ">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the
                    next level
                </div>
            </div>
        </div>
    );
}
