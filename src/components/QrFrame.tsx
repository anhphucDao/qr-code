import React from 'react';
import QrImage from './QrImage';

export default function QrFrame() {
    return (
        <div className="w-[316px] h-[484px] rounded-[16px] bg-white shadow-lg relative top-[154px] left-1/2 transform -translate-x-1/2 overflow-auto">
            <QrImage />
            <div className="flex flex-col absolute top-[306px] flex-nowrap items-center left-1/2 transform -translate-x-1/2 space-y-[8px] text-center md:space-y-[18px]">
                <div className="text-[#1F3251] text-[20px] md:text-[22px] w-[254px]  font-semibold ">
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
