import React from 'react';
import QrFrame from './components/QrFrame';
import './index.css';

function App() {
    return (
        <div className="bg-[#D6E2F0] h-screen bg-cover font-outfit p-0 m-0 w-screen box-content min-w-max min-h-screen">
            <QrFrame />
            <div className="absolute font-semibold text-[12px] text-[#1F3251] top-[646px] left-1/2 transform -translate-x-1/2 text-center">
                Challenge by{' '}
                <a
                    className="underline text-blue-500 hover:text-blue-400"
                    href="https://www.frontendmentor.io"
                >
                    {' '}
                    Frontend Mentor{' '}
                </a>
                . Coded by{' '}
                <a
                    className="underline text-blue-500 hover:text-blue-400"
                    href="https://github.com/anhphucDao"
                >
                    Andrew Dao.{' '}
                </a>
            </div>
        </div>
    );
}

export default App;
