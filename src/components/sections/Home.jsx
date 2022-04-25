import React from 'react';
import { useSpring, animated } from 'react-spring'
import TypeAnimation from 'react-type-animation'
import profilePic from '../../transparent-profile.png';
import { isMobile } from 'react-device-detect';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${-x / 30}px,${-y / 30}px,0)`

const Home = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 500, friction: 140 } }))

    return(
        <div>
            <div className="profile-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                {isMobile !== "Mobile"
                    ? <animated.img src={profilePic} className="profile-pic" alt="profile pic" style={{ transform: props.xy.to(trans1) }} />
                    : <img src={profilePic} alt="profile pic" className="profile-pic" />
                }
            </div>
        
            <div className="home-section">
                <div className="home-text">
                    <h3>Computer Science Student at University of Waterloo</h3>
                    <TypeAnimation
                        cursor={true}
                        sequence={['Daniel Kulakouski']}
                        wrapper="h1"
                        className="home-name"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;