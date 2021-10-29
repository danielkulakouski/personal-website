import React from 'react';
import Header from './Header';

const PageWrapper = ({ title, children }) => (
    <div>
        <Header title={title} />
        {children}
    </div>
);

export default PageWrapper;