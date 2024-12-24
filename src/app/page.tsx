import Image from "next/image";
import HideShow from "./funcs/hideShow";
// import ScrollImages from "./funcs/scrollImages";

export default function Home() {
  return (
    <div className="pageContainer">
      <HideShow />
      {/* className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" */}
      <div className="grid-container" id="aboutMe">

        <div className="grid-header">
          <div className="proprietary-container header">
            <h3>About Me</h3>
          </div>
        </div>

        <div className="grid-body">
          <div className="imageNameContainer">
            <Image src="/icons/placeholder.jpg" alt="image" width={794} height={418} ></Image>
            <div className="imageTextContainer">
            <h1>BRIAN BATARA YAPUTRA</h1>
            <h2>Hello, I'm Brian. I'm currently a student, with many interests related to the development of technology.</h2>
          {/* <h2>I am currently a student. I love all aspects of tinkering, but have a special affinity to coding, web design, and electronics.</h2> */}
            </div>
          </div>
          {/* <div className="grid-body">
              <div className="proprietary-container">
                <h1>LANGUAGES</h1>
                <h2>NextJS, ReactJS, Java</h2>
              </div>
              <div className="proprietary-container">
                <h1>SOCIALS</h1>
                <h2>Instagram</h2>
                <h2>Github</h2>
              </div>
          </div> */}

          <div className="row-Informatica">
            <div className="row-textContainer">
              <h1>Languages I've learned</h1>
              <h2>I have a strong foundation in CSS, HTML, and JavaScript. I have worked with frameworks like ReactJS, NextJS and occasionally threeJS. Here are some other languages I've learned:</h2>
            </div>
            <div className="icon-marquee-container">
              <div className="marquee">
                <img src="/icons/threejslogo.png" alt="Image 1" />
                <img src="/icons/reactlogo.png" alt="Image 2" />
                <img src="/icons/clogo.png" alt="Image 3" />
                <img src="/icons/tslogo.png" alt="Image 4" />
                <img src="/icons/threejslogo.png" alt="Image 1" />
                <img src="/icons/reactlogo.png" alt="Image 2" />
                <img src="/icons/clogo.png" alt="Image 3" />
                <img src="/icons/tslogo.png" alt="Image 4" />
              </div>
            </div>
          </div>
          <div className="row-Informatica">
            <div className="thrdImageContainer">
              <div className="thrdImageOne">
              <Image src="/icons/Scratch_3.0_editor.png" alt="scratchimage" width={640} height={400}></Image>
              </div>
              <div className="thrdImageTwo">
              <Image src="/icons/keyboardImage.jpg" alt="keyboardimage" width={3000} height={2383}></Image>
              </div>
            </div>

            <div className="row-textContainer">
              <h2>I know it's a bit typical, but technology has been my passion for many years. I started out learning Scratch as a young boy. I delved into electronics at a later age via keyboards.</h2>
            </div>       
          </div>

        </div>
      </div>
      {/* <div className="grid-container" id="projects">
        <div className="grid-header">
          <div className="proprietary-container header">
            <h3>Projects</h3>
          </div>
        </div>
        <div className="grid-body">
            <div className="proprietary-container">
              <h1>RESEARCH PAPER</h1>
              <h2>This was a final year project for my highschool. I created a research paper pertaining to analyzing five popular image file formats.</h2>
            </div>
        </div>
      </div> */}

      {/* <div className="grid-container" id="work">
        <div className="proprietary-container header">
          <h3>Work Experience</h3>
        </div>
        <div className="grid-body">
          <div className="proprietary-container">
            <h1>INTERNSHIP</h1>
            <h2>Quantum Teknologi Nusantara</h2>
            <h4>1-month</h4>
            <p>Full-stack developer.</p>
            <p>Worked on a website in ReactJS and NextJS.</p>
          </div>
        </div>
      </div> */}

      {/* <div className="grid-container" id="hobby">

        <div className="grid-header">
          <div className="proprietary-container header">
            <h3>Hobbies</h3>
          </div>
        </div>

        <div className="grid-body">
          <div className="proprietary-container">
            <h1>Internship</h1>
            <h2>NextJS, ReactJS, Java</h2>
          </div>
          <div className="proprietary-container">
            <h1>Internship</h1>
            <h2>NextJS, ReactJS, Java</h2>
          </div>
          <div className="proprietary-container">
            <h1>Internship</h1>
            <h2>NextJS, ReactJS, Java</h2>
          </div>
        </div>

      </div> */}
      
    </div>
    
  );
}
