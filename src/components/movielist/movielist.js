import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import scrape from './movielist/scrape';

const MovieList = ({scrapedmovies}) => (
	<div className="scrapedMovieList">
		<ListGroup>
			{scrapedmovies.map(scrapedmovies => <scrape key={scrapedmovies.id}{...scrapedmovies} /> )}
			<Button bsStyle="success" onClick={saveMovie}>Save</Button>
  		</ListGroup>
	</div>
)

const saveMovie

export default MovieList