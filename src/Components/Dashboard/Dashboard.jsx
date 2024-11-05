import React from 'react';
import useTabTitle from '../../Hooks/useTabTitle';

const Dashboard = () => {
    useTabTitle('Gadget Heaven | Dashboard');

    return (
        <div>
            <h1>This is Dashboard.</h1>
        </div>
    );
};

export default Dashboard;