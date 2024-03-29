import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/Weather.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><b id="orints">O</b>Weather</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link className="link-item" to="/charts">Pressure/Humidity</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link className="link-item" to="/Historical">Data Table</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Navbar>
            </div>
        );
    }
}

export default Header;