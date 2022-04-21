import React from 'react';
import Gallery from "react-photo-gallery";
import profilePic from '../../programming.jpg';

const photos = [
    {
        src: profilePic,
        width: 4,
        height: 3,
    },{
        src: profilePic,
        width: 4,
        height: 3,
    },{
        src: profilePic,
        width: 4,
        height: 3,
    }];

const Projects = () => (
    <div id="projects">
        <h1>Projects</h1>
        {/* <Gallery photos={photos} /> */}
    </div>
);

export default Projects;