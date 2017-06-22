import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Button} from 'react-bootstrap';
// import scrape from './js/app';

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
        				<NavItem><Button id="scrape-button" bsStyle="danger">Scrape Movies</Button></NavItem>
      				</Nav>
    			</Navbar.Collapse>
  			</Navbar>
            </div>
		);
	}
}