import React from 'react';
import { useSpring, animated } from 'react-spring'
import TypeAnimation from 'react-type-animation'
import profilePic from '../../transparent-profile.png';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${-x / 50}px,${-y / 50}px,0)`
// const trans1 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans1 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans1 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Home = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 500, friction: 140 } }))

    return(
        <div>
            <div className='testt'>
                <img src={profilePic} alt="profile pic" className="profile-pic" />
            </div>
        
        <div id="home" className="home-section" /*onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}*/>
            <div className="home-text">
                <h3>Computer Science Student at University of Waterloo</h3>
                <TypeAnimation
                    cursor={true}
                    sequence={['Daniel Kulakouski']}
                    wrapper="h1"
                />
            </div>
            {/* <animated.div className="profile-container" style={{ transform: props.xy.to(trans1) }}> */}
                {/* <animated.div className="profile-pic" style={{ transform: props.xy.to(trans1) }} /> */}
            {/* <img src={profilePic} alt="profile pic" className="profile-pic" /> */}
            {/* </animated.div> */}
        </div>
        </div>
    );
};

export default Home;