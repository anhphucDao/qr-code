// import React from 'react';
// import { useEffect, useState } from 'react';

// export default function Qr() {
//     const api =
//         'https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json';

//     const [myData, setMyData] = useState([]);

//     useEffect(() => {
//         const apiFetching = async () => {
//             try {
//                 const response = await fetch(api);
//                 const data = await response.json();

//                 setMyData(data);

//                 console.log(myData);

//                 console.log(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         apiFetching();
//     }, []);

//     return <div>{}</div>;
// }
