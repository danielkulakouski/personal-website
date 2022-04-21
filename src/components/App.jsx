import React from 'react';
import '../styles/styles.scss';
import 'animate.css';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Header from './Header';
import InProgress from './sections/InProgress';

const App = () => (
    <React.Fragment>
        <Header />
        <div className="container">
            <div className="section">
                <div className="content">
                    <Home id="home" />
                </div>
            </div>
            <div className="section">
                <div className="content">
                    <InProgress id="inProgress" />
                </div>
            </div>
            {/* <div className="section">
                <div className="content">
                    <About id="about" />
                </div>
            </div>
            <div className="section">
                <div className="content">
                    <Projects id="projects" />
                </div>
            </div> */}
        </div>
    </React.Fragment>
);

export default App;
