import Image from "next/image";

export default function OrderingSystem() {

    return (
        <div className="pageContainer">
            <div className="grid-container">
            <div className="grid-header">
                <div className="proprietary-container header">
                    <h3>ORDERING SYSTEM WITH REAL-TIME PAYMENT INTEGRATION</h3>
                </div>
                <h2>/<a className="readmoreClick1" href="/projects/">projects</a>/<a className="readmoreClick1" href="/projects/orderingsystem/">orderingsystem</a>/</h2>
            </div>

                <div className="articleBody">
                    <h1><b>Main Features:</b></h1>
                    <ol>
                        <li><h2>- Login system</h2></li>
                        <li><h2>- Ordering system</h2></li>
                        <li><h2>- Payment processing</h2></li>
                        <li><h2>- Top-up system with real-life QRIS integration</h2></li>
                    </ol>
                    <br></br>

                    <h1><b>Languages used:</b></h1>
                    <ol>
                        <li><h2>- Java</h2></li>
                        <li><h2>- JavaScript</h2></li>
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
                    <br></br>
                    <div className="expandContentImages1">
                        <Image src="/imgassets/vendorview1.png" alt="vendorview1" width={1919} height={948}></Image>
                    </div>
                    <h3>Vendor homepage</h3>
                    <br></br>
                    
                    <h1>Product Demonstration:</h1>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                        <iframe
                            src="https://drive.google.com/file/d/1Tx034zeM1AJ_poapdmB5VL8djgmaHEU5/preview"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            }}
                            title="Product Demonstration Video"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}