import React from 'react';
import profilePic from '../../transparent-profile.png';

const Home = () => (
    <div className="home-section">
        <div className="home-text">
            <h3>Computer Science Student at University of Waterloo</h3>
            <h1 id="home">Daniel Kulakouski</h1>
        </div>
        <div className="profile-container">
            <img src={profilePic} alt="profile pic" className="profile-pic" />
        </div>
    </div>
);

export default Home;