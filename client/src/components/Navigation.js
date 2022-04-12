import React from "react";
import { Link } from "react-router-dom";
import {
        Navbar,
        Nav,
        NavbarBrand,
        NavItem,
        NavLink
    }
    from "reactstrap";

function Navigation(params) {
    return(
        <Navbar>
            <NavbarBrand>
                <Link to={"/"}>Better Reads</Link>
            </NavbarBrand>
            <Nav>
                {/* TODO Remove NavLink so it's just Link and then style it appropriately since the Link element handles the routing, not the NavLink 'href' attribute (the latter refreshes the page and isn't as responsive) */}
                <NavItem>
                    <NavLink>
                        <Link to={"/books"}>Books</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to={"/reviews"}>Reviews</Link>
                    </NavLink>
                </NavItem>
                {/* Add conditional rendering to show logout versus login depending on if the user is logged in */}
                <NavItem>
                    <NavLink>
                        <Link to={"/login"}>Login</Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Navigation;