import React from 'react';
import { NavLink } from 'react-router-dom';

import './Items.css';

const Items = (props) => (
    <li className="items">
        <NavLink
            to={props.link}
            exact={props.exact}>
            {props.children}
        </NavLink>
    </li>
);

export default Items;