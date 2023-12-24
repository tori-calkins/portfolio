import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Header1 = (args) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <div className="Header3">
            <Navbar {...args}>
                <NavbarBrand id="cornerName" href="/">Tori Calkins</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/frontend">Front End Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/fullstackprojects">Full Stack Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/tori-calkins" target="_blank">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.linkedin.com/in/victoria-calkins-a6773128a/" target="_blank">
                                LinkedIn
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        </>
    )
}

export default Header1

