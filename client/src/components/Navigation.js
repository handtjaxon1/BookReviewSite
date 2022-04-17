import React from "react";
import { Link } from "react-router-dom";
import {
        Navbar,
        Nav,
        NavbarBrand,
        NavItem,
        NavLink,
        Container
    }
    from "reactstrap";

function Navigation(props) {
    const { loggedIn, setLoggedIn } = props;

    return(
        <Navbar className="navbar-dark bg-dark">
            <Container className="d-flex justify-content-between align-items-center">
                <NavbarBrand>
                    <Link to={"/"} className="link-light">
                        <img src={process.env.PUBLIC_URL + "/BetterReadsLogo.png"} height="48px" width="48px" alt="logo" style={{marginRight: "1rem", color: ""}}/>
                        Better Reads
                    </Link>
                </NavbarBrand>
                <Nav>
                    {/* TODO Remove NavLink so it's just Link and then style it appropriately since the Link element handles the routing, not the NavLink 'href' attribute (the latter refreshes the page and isn't as responsive) */}
                    <NavItem>
                        <NavLink>
                            <Link to={"/books"} className="link-light">Books</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to={"/reviews"} className="link-light">Reviews</Link>
                        </NavLink>
                    </NavItem>
                    {/* Conditional rendering to show logout versus login depending on if the user is logged in */}
                    <NavItem>
                        <NavLink>
                            { loggedIn ?
                                <Link to={"/"} onClick={(e) => setLoggedIn(false)} className="link-light">Logout</Link>
                                :
                                <Link to={"/login"} className="link-light">Login</Link>
                            }
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;