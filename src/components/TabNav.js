import React from "react";
import { NavLink } from "react-router-dom";

import './tabnav.css';

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <div className='tab-nav-container'>
            <NavLink
                to='/characters-list'
                activeStyle={{
                    color: '#C3CDE6'
                }}
            >
                Characters List
            </NavLink>
            <NavLink
                to='/episodes-list'
                activeStyle={{
                    color: '#C3CDE6'
                }}
            >
                Episodes List
            </NavLink>
            <NavLink
                to='/locations-list'
                activeStyle={{
                    color: '#C3CDE6'
                }}
            >
                Locations List
            </NavLink>
        </div>
    )
};
