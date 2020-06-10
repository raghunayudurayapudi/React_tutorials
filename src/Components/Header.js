import React from 'react';
import { Nav,Navbar, NavItem,NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
        <Navbar>
        <Nav >
        <NavItem>
          <NavLink tag={Link} to="/" active>OverView</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/Projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/Employees">Employees</NavLink>
        </NavItem>
        <NavItem>
        </NavItem>
      </Nav>
        </Navbar>

    </div>
  );
}

export default Header;