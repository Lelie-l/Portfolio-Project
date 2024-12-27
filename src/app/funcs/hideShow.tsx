'use client';

import { useEffect } from "react";
import "../globals.css";

const HideShow = () => {
    useEffect(() => {
        // Get buttons
        const allButton = document.getElementById("allButton");
        const codingButton = document.getElementById("codingButton");
        const threedButton = document.getElementById("3dButton");
        const miscButton = document.getElementById("miscButton");

        // Get elements to hide/show by ID
        const misc = document.getElementById("misc");
        const coding = document.getElementById("coding");
        const coding1 = document.getElementById("coding1");
        // const coding2 = document.getElementById("coding2");
        const threed = document.getElementById("3d");

        // If all elements exist
        // function handleAllClick() {
        //     if (misc && coding && coding1 && coding2 && threed) {
        //         misc.style.display = "none";
        //         coding.style.display = "none";
        //         coding1.style.display = "none";
        //         coding2.style.display = "none";
        //         threed.style.display = "none";

        //         setTimeout(() => {
        //             misc.style.display = "block";
        //             coding.style.display = "block";
        //             coding1.style.display = "block";
        //             coding2.style.display = "block";
        //             threed.style.display = "block";
        //         }, 100)
        //     }
        // }
    
        // function handleCodingClick() {
        //     if (misc && coding && coding1 && coding2 && threed) {
        //         misc.style.display = "none";
        //         coding.style.display = "none";
        //         coding1.style.display = "none";
        //         coding2.style.display = "none";
        //         threed.style.display = "none";
                
        //         setTimeout(() => {
        //             coding.style.display = "block";
        //             coding1.style.display = "block";
        //             coding2.style.display = "block";
        //         }, 100)
        //     }
        // }
    
        // function handle3DClick() {
        //     if (misc && coding && coding1 && coding2 && threed) {
        //         misc.style.display = "none";
        //         coding.style.display = "none";
        //         coding1.style.display = "none";
        //         coding2.style.display = "none";
        //         threed.style.display = "block";
        //     }
        // }
    
        // function handleMiscClick() {
        //     if (misc && coding && coding1 && coding2 && threed) {
        //         misc.style.display = "block";
        //         coding.style.display = "none";
        //         coding1.style.display = "none";
        //         coding2.style.display = "none";
        //         threed.style.display = "none";
        //     }   
        // }

        function handleAllClick() {
            if (misc && coding && coding1 && threed) {
                misc.style.display = "none";
                coding.style.display = "none";
                coding1.style.display = "none";
                threed.style.display = "none";
        
                setTimeout(() => {
                    misc.style.display = "block";
                    coding.style.display = "block";
                    coding1.style.display = "block";
                    threed.style.display = "block";
                }, 100);
            }
        }
        
        function handleCodingClick() {
            if (misc && coding && coding1 && threed) {
                misc.style.display = "none";
                coding.style.display = "none";
                coding1.style.display = "none";
                threed.style.display = "none";
                
                setTimeout(() => {
                    coding.style.display = "block";
                    coding1.style.display = "block";
                }, 100);
            }
        }
        
        function handle3DClick() {
            if (misc && coding && coding1 && threed) {
                misc.style.display = "none";
                coding.style.display = "none";
                coding1.style.display = "none";
                threed.style.display = "block";
            }
        }
        
        function handleMiscClick() {
            if (misc && coding && coding1 && threed) {
                misc.style.display = "block";
                coding.style.display = "none";
                coding1.style.display = "none";
                threed.style.display = "none";
            }   
        }
        

            // Add event listeners for buttons
            allButton?.addEventListener("click", handleAllClick);
            codingButton?.addEventListener("click", handleCodingClick);
            threedButton?.addEventListener("click", handle3DClick);
            miscButton?.addEventListener("click", handleMiscClick);

            // Cleanup event listeners when component is unmounted
        //     return () => {
        //         allButton?.removeEventListener("click", handleAllClick);
        //         codingButton?.removeEventListener("click", handleCodingClick);
        //         threedButton?.removeEventListener("click", handle3DClick);
        //         miscButton?.removeEventListener("click", handleMiscClick);
        // }
    }, []);

    return null;
};

export default HideShow;
