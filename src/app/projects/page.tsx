export default function Projects() {
    return (
        <div className="pageContainer">
            <div className="grid-container" id="projects">
                <div className="grid-header">
                    <div className="proprietary-container header">
                        <h3>Projects</h3>
                    </div>
                    <div className="projectNavbar">
                        <div className="projectNavbar selector">All</div>
                        <div className="projectNavbar selector">Coding</div>
                        <div className="projectNavbar selector">3D Modelling</div>
                        <div className="projectNavbar selector">Electronics</div>
                    </div>
                </div>
                <div className="proprietary-container smallDescription">
                    <h1>RESEARCH PAPER</h1>
                    <h2>This was a final year project for my highschool. I created a research paper pertaining to analyzing five popular image file formats.</h2>
                </div>
                <div className="proprietary-container smallDescription">
                    <h1>ORDERING SYSTEM WITH REAL-TIME PAYMENT INTEGRATION</h1>
                    <h2></h2>
                </div>
                <div className="proprietary-container smallDescription">
                    <h1>PASSWORD ENCRYPTION USING IMAGING</h1>
                </div>
                <div className="proprietary-container smallDescription">
                    <h1>MODELLING CASES FOR KEYBOARDS</h1>
                </div>
        </div>
        </div>
    );
}