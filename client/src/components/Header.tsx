import React, { useState } from "react";
import NavTab from './Navtab';
import { Outlet } from 'react-router-dom'

function Header() {
    const [currentPage, setCurrentPage] = useState("/");

    return (
        <div className="headerParent" style={{ padding: "0px 0px 10px 43px"}}>
            <h1 id="header-text">TheBookNook</h1>
            <nav>
            <NavTab
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}/>
            <Outlet />
            </nav>
        </div>
    )
};

export default Header;