import React from 'react';

import './NavigationItems.scss';
import Items from './Items/Items';

const NavigationItems = porps => {
    return (
        <ul className="navigation">
            <Items link="/" exact>Home</Items>
            <Items link="/about" exact>About</Items>
        </ul>
    );
};

export default NavigationItems;