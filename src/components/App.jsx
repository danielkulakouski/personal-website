import React from 'react';
import Home from './sections/Home';
// import About from './sections/About';
// import Projects from './sections/Projects';
// import Header from './Header';
import InProgress from './sections/InProgress';
import createScrollSnap from 'scroll-snap';

import '../styles/styles.scss';
import 'animate.css';

class App extends React.Component {
    container = React.createRef()

    bindScrollSnap() {
        const element = this.container.current
        createScrollSnap(element, {
            snapDestinationY: '100%',
        })
    }

    componentDidMount() {
        this.bindScrollSnap()
    }
    
    render() {
        return (
            <React.Fragment>
            {/* <Header /> */}
            <div id='container' ref={this.container}>


                {/* <Header /> */}
                {/* <div className="container"> */}
                    <div className="container" id="home">
                            <Home  />
                    </div>
                    <div className="container" id="inProgress">
                            <InProgress  />
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
                {/* </div> */}
            </div>
            </React.Fragment>
        );
    }
}

export default App;
