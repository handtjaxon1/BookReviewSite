import React from "react";
import {
        Navbar,
        NavbarBrand
    }
    from "reactstrap";

function Navigation(params) {
    return(
        <Navbar>
            <NavbarBrand href="#">
                Better Reads
            </NavbarBrand>
        </Navbar>
    );
}

export default Navigation;