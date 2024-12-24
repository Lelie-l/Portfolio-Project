import Image from "next/image";

export default function CaseKB() {
    return (
        <div className="pageContainer">
            <div className="grid-container">
                <div className="grid-header">
                    <div className="proprietary-container header">
                        <h3>Keyboard cases</h3>
                    </div>
                    <h2>/<a className="readmoreClick1" href="/projects/">projects</a>/<a className="readmoreClick1" href="/projects/casekb/">casekb</a>/</h2>
                </div>
                
                <div className="articleBody">
                    {/* <h1>Violet Evergarden-themed Ergonomic (Alice-style) Keyboard</h1>
                    <h2></h2>
                    <br></br>
                    <hr></hr>
                    <br></br> */}

                    <h1>Apple M0110-style case</h1>
                    <h2>I modeled a case for a Unix60 PCB after a very old Apple keyboard called the M0110.</h2>
                    <h2><a href="https://github.com/Lelie-l/Apple-M0110-Case-for-Unix60" className="readmoreClick1">GitHub Link</a></h2>
                    <br></br>
                    <img src="/imgassets/originalm0110.webp" className="imageUneven"></img>
                    <h3>An original Apple M0110.</h3>
                    <br></br>
                    <h2>My renders:</h2>
                    <img src="/imgassets/m0110front.png" className="imageUneven"></img>
                    <h3>Isometric front view of the M0110 case.</h3>
                    <img src="/imgassets/m0110back.png" className="imageUneven"></img>
                    <h3>Rear view of the M0110 case.</h3>
                    <br></br>
                    <hr></hr>
                    <br></br>

                    <h1>Aftermarket CIY Gas67 Case</h1>
                    <h2><a href="https://github.com/Lelie-l/Gas67-Magnetic-Case" className="readmoreClick1">GitHub Link</a></h2>
                    <br></br>
                    <img src="/imgassets/gas67case.png" className="imageUneven"></img>
                    <h3>Front view of the case.</h3>
                </div>
            </div>
        </div>
    );
}