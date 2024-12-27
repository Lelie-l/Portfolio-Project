"use client";

import HideShow from "../funcs/hideShow";
export default function Projects() {

    // const expandContent1 = () => {
    //     const content = document.querySelector(".expandContent1") as HTMLElement;
    //     const readMore = document.querySelector(".readmoreClick1") as HTMLElement;
    //     const contentContainer = document.querySelector(".proprietary-container.smallDescription") as HTMLElement;

    //     if (content && readMore && contentContainer) {
    //         content.style.display = "block";
    //         readMore.style.display = "none";

    //         setTimeout(() => content.classList.add("visible"), 10);
    //         setTimeout(() => contentContainer.classList.add("expanded"), 10);
    //     }
    // }

    // const reverseExpand1 = () => {
    //     const content = document.querySelector(".expandContent1") as HTMLElement;
    //     const readMore = document.querySelector(".readmoreClick1") as HTMLElement;
    //     const contentContainer = document.querySelector(".proprietary-container.smallDescription") as HTMLElement;

    //     if (content && readMore && contentContainer) {
    //         content.style.display = "none";
    //         readMore.style.display = "block";

    //         setTimeout(() => content.classList.remove("visible"), 10);
    //         setTimeout(() => contentContainer.classList.remove("expanded"), 10);
    //     }
    // }

    return (
        <div className="pageContainer">
            <div className="grid-container" id="projects">
                <div className="grid-header">
                    <div className="proprietary-container header">
                        <h3>Projects</h3>
                    </div>
                    <div className="projectNavbar">
                        <div className="projectNavbar selector"><button id="allButton">All</button></div>
                        <div className="projectNavbar selector"><button id="codingButton">Coding</button></div>
                        <div className="projectNavbar selector"><button id="3dButton">3D Modelling</button></div>
                        <div className="projectNavbar selector"><button id="miscButton">Miscellaneous</button></div>
                    </div>
                </div>
                <HideShow />
                <div className="proprietary-container smallDescription" id="misc">
                    <h1>RESEARCH PAPER</h1>
                    <h2>This was a final year project for my highschool. I created a research paper pertaining to analyzing five popular image file formats. <a href="/projects/researchpaper" className="readmoreClick1">Read more</a></h2>
                </div>
                    <div className="proprietary-container smallDescription" id="coding">
                        <h1>ORDERING SYSTEM WITH REAL-TIME PAYMENT INTEGRATION</h1>
                        <h2>For an inter-school competition, I created an ordering system that utilizes QRIS, Indonesia&apos;s nationally standardized QR code that allows for contactless payments. <a href="/projects/orderingsystem" className="readmoreClick1">Read more</a></h2>
                        <div className="expandContent1">
                            {/* <br></br>
                            <h2><b>Main Features:</b></h2>
                            <ol>
                                <li><h2>- Login system</h2></li>
                                <li><h2>- Ordering system</h2></li>
                                <li><h2>- Payment processing</h2></li>
                                <li><h2>- Top-up system with real-life QRIS integration</h2></li>
                            </ol>
                            <br></br>
                            
                            <h2>I created two user groups, students and vendors. A login page was created to direct the users to their respective user interfaces.</h2>
                            <br></br>
                                <div className="expandContentImages">
                                    <Image src="/imgassets/studenthomepage.png" alt="studenthomepage" width={395} height={859}></Image>
                                    <Image src="/imgassets/studentorderview.png" alt="studenthomepage" width={395} height={859}></Image>
                                    <Image src="/imgassets/studentorderpage.png" alt="studenthomepage" width={395} height={859}></Image>
                                </div>
                            <h3>From left to right: Home page, Menu page, Cart page.</h3>
                            <br></br>
                            <h2>I made a very simple UI with Vaadin, displaying the registered vendors alongside their menu items. Users are able to access items in their cart and check out. A vendor homepage was also made, with a user interface for vendors to track their menu items, stock, unfinished orders and order history.</h2>
                            <br></br> */}
                            {/* <div className="expandContentImages1">
                                <Image src="/imgassets/vendorview1.png" alt="vendorview1" width={1919} height={948}></Image>
                            </div> */}
                            {/* <a href="#" className="readmoreClick1" onClick={reverseExpand1}><h2>See less</h2></a> */}
                        </div>
                </div>
                <div className="proprietary-container smallDescription" id="coding1">
                    <h1>PASSWORD ENCRYPTION USING IMAGING</h1>
                    <h2>As a project/project submission for my final year of school, I and a friend created a way to encrypt passwords using images.</h2>
                    <h2>The program took the password and image chosen by the user, and used the image&apos;s data to encrypt the password.</h2>
                    <h2>With this, our group ended up placing third in the competition. <a href="/projects/passencryption" className="readmoreClick1">Read more</a></h2>
                </div>
                {/* <div className="proprietary-container smallDescription" id="coding2">
                    <h1>TOURISM WEBSITE FOR INTERNSHIP</h1>
                    <h2></h2>
                </div> */}
                <div className="proprietary-container smallDescription" id="3d">
                    <h1>MODELLING CASES FOR KEYBOARDS</h1>
                    <h2>Some modelling work I did while learning Fusion for some keyboards. <a href="/projects/casekb" className="readmoreClick1">Read more</a></h2>
                </div>
            </div>
        </div>
    );
}