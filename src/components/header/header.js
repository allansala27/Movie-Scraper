import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Button} from 'react-bootstrap';


export default class Header extends Component {
	render(){
		return (
            <div className="header">
			<Navbar inverse collapseOnSelect>
    			<Navbar.Header>
     				<Navbar.Brand>
        				<a href="#">Movie Scraper</a>
      				</Navbar.Brand>
      				<Navbar.Toggle />
    			</Navbar.Header>
    			<Navbar.Collapse>
      				<Nav>
        				<NavItem eventKey={1} href="#">Notes</NavItem>
                        <NavItem eventKey={2} href="#">Saved Movies</NavItem>
        				<NavItem eventKey={3} ><Button bsStyle="danger">Scrape Movies</Button></NavItem>
      				</Nav>
    			</Navbar.Collapse>
  			</Navbar>
            </div>
		);
	}
}