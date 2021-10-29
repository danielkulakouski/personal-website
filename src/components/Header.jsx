import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({ title }) => (
    <div>
        <h1>{title}</h1>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
    </div>
);

export default Header;