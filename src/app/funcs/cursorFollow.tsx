// 'use client'; 

// import { useEffect } from "react";
// import "./globals.css";

// const CursorCircle = () => {
//   useEffect(() => {
//     const circle = document.createElement("div");
//     circle.id = "cursorCircle";
//     circle.className = "circle";
//     document.body.appendChild(circle);

//     const createTrail = (x: number, y: number) => {
//       const trail = document.createElement("div");
//       trail.classList.add("trail");
//       document.body.appendChild(trail);

//       trail.style.left = `${x}px`;
//       trail.style.top = `${y}px`;

//       setTimeout(() => {
//         trail.style.transform = "scale(0)";
//         trail.style.opacity = "0";
//       }, 100);

//       setTimeout(() => {
//         trail.remove();
//       }, 500);
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//       const x = event.clientX;
//       const y = event.clientY;

//       circle.style.top = `${y-10}px`; // Adjust to center the circle
//       circle.style.left = `${x-10}px`; // Adjust to center the circle

//       createTrail(x-10, y-10);
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.body.removeChild(circle);
//     };
//   }, []);

//   return null;
// };

// export default CursorCircle;
