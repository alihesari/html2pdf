import React from "react";

import "./Toolbar.scss";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
    <header className="toolbar">
        <Logo />
        <NavigationItems />
    </header>
);

export default toolbar;