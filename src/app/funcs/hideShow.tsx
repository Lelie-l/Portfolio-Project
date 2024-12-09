'use client'; 

import { useEffect } from "react";
import "../globals.css"; 

const HideShow = () => {
    useEffect(() => {
        // buttons
        const allButton = document.getElementById("allButton");
        const aboutButton = document.getElementById("aboutButton");
        const projectsButton = document.getElementById("projectsButton");
        const workButton = document.getElementById('workButton');
        const hobbyButton = document.getElementById('hobbyButton')

        // elements to be hidden or shown
        const aboutItems = document.getElementById("aboutMe");
        const projectItems = document.getElementById("projects")
        const workItems = document.getElementById("work")
        const hobbyItems = document.getElementById("hobby")

        function handleAllClick() {
            if (aboutItems && projectItems && workItems && hobbyItems) {
                aboutItems.classList.remove("hidden");
                projectItems.classList.remove("hidden");
                workItems.classList.remove("hidden");
                hobbyItems.classList.remove("hidden");
                aboutItems.classList.add("visible");
                projectItems.classList.add("visible");
                workItems.classList.add("visible");
                hobbyItems.classList.add("visible");
            }
        }

        function handleAboutClick() {
            if (aboutItems && projectItems && workItems && hobbyItems) {
                aboutItems.classList.remove("hidden");
                projectItems.classList.add("hidden");
                workItems.classList.add("hidden");
                hobbyItems.classList.add("hidden");
                aboutItems.classList.add("visible");
                projectItems.classList.remove("visible");
                workItems.classList.remove("visible");
                hobbyItems.classList.remove("visible");
            }
        }

        function handleProjectClick() {
            if (aboutItems && projectItems && workItems && hobbyItems) {
                aboutItems.classList.add("hidden");
                projectItems.classList.remove("hidden");
                workItems.classList.add("hidden");
                hobbyItems.classList.add("hidden")
                aboutItems.classList.remove("visible");
                projectItems.classList.add("visible");
                workItems.classList.remove("visible");
                hobbyItems.classList.remove("visible");
            }
        }

        function handleWorkClick() {
            if (aboutItems && projectItems && workItems && hobbyItems) {
                aboutItems.classList.add("hidden");
                projectItems.classList.add("hidden");
                workItems.classList.remove("hidden");
                hobbyItems.classList.add("hidden");
                aboutItems.classList.remove("visible");
                projectItems.classList.remove("visible");
                workItems.classList.add("visible");
                hobbyItems.classList.remove("visible");
            }
        }

        function handleHobbyClick() {
            if (aboutItems && projectItems && workItems && hobbyItems) {
                aboutItems.classList.add("hidden");
                projectItems.classList.add("hidden");
                workItems.classList.add("hidden");
                hobbyItems.classList.remove("hidden");
                aboutItems.classList.remove("visible");
                projectItems.classList.remove("visible");
                workItems.classList.remove("visible");
                hobbyItems.classList.add("visible");
            }
        }

        allButton?.addEventListener('click', handleAllClick)
        aboutButton?.addEventListener('click', handleAboutClick);
        projectsButton?.addEventListener('click', handleProjectClick);
        workButton?.addEventListener('click', handleWorkClick)
        hobbyButton?.addEventListener('click', handleHobbyClick)
        

    }, [])

    return null;
}

export default HideShow;