// 'use client'; 

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import "../globals.css";

// const ScrollImages = () => {
//   const [scrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY); // Update the scroll position
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll); // Add scroll event listener

//     return () => {
//       window.removeEventListener('scroll', handleScroll); // Clean up the event listener
//     };
//   }, []);

//   return (
//     <div className="thrdImageContainer">
//       <Image
//         src="/icons/Scratch_3.0_editor.png"
//         alt="scratchimage"
//         width={640}
//         height={400}
//         style={{
//           transform: `translate3d(0, ${scrollY * 0.2}px, 0)`, // Move the image based on scroll
//         }}
//       />
//       <Image
//         src="/icons/keyboardImage.jpg"
//         alt="keyboardimage"
//         width={3000}
//         height={2383}
//         style={{
//           transform: `translate3d(0, ${scrollY * 0.3}px, 0)`, // Move the image based on scroll
//         }}
//       />
//     </div>
//   );
// };

// export default ScrollImages;
