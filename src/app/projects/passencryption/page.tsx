import Image from "next/image";

export default function PassEncryption() {
    return (
        <div className="pageContainer">
            <div className="grid-container">
                <div className="grid-header">
                    <div className="proprietary-container header">
                        <h3>image password encryption</h3>
                    </div>
                    <h2>/<a className="readmoreClick1" href="/projects/">projects</a>/<a className="readmoreClick1" href="/projects/passencryption/">passencryption</a>/</h2>
                </div>

                <div className="articleBody">
                    <h2>A school science festival (STEAM) is hosted every year at my school. Being a senior, a requirement for graduation was to create a project related to my chosen electives for this festival, where a winner would be determined based on the finished product. I was paired up with a friend with similar interests as mine. We decided to create a password encryption system using images as a method of encryption. This was a very basic project and a bit poorly written, but helped my group achieve <span className="red-text">third place</span>.</h2>
                    <br></br>

                    <h1><b>Languages used:</b></h1>
                    <ol>
                        <li><h2>- HTML</h2></li>
                        <li><h2>- CSS</h2></li>
                    </ol>
                    <br></br>

                    <h1>GitHub repo:</h1>
                    <br></br>

                    <h1><b>How it works:</b></h1>
                    <h2>You have the choice of taking a picture on your own or feeding the webpage an image stored locally. The webpage does not store the image in a file--rather as an <span className="red-text">array</span> containing RGB values that when processed, can encode to the image.</h2>
                    <br></br>
                    <h2>The RGB values of each pixel of the image is contained within the array. For example, imgArray[0] would be the red channel value, imgArray[1] would be the green channel and imgArray[2] would be the blue channel. The alpha channel value is also stored but in this case not used.</h2>
                    <br></br>
                    <h2>A random number generator selects between a range of 1-3, wherein if 1 was chosen, the red channel values of the image would all be added together to produce a <span className="red-text">salt</span>. A <span className="red-text">salt</span> is a cryptographic technique where one adds random data to a password before hashing it to add randomness.</h2>
                    <br></br>
                    <h2>The salt is then added to the password, where a <span className="red-text">hashing function</span> is then used to encrypt the password. The salt and resulting hash is stored in a database, where if a person then tries to log in, the password will be run through its respective salt and checked against the resulting hash in order to be verified.</h2>
                </div>
            </div>
        </div>
    );
}