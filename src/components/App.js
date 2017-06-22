import React, { Component } from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import Header from './header/header';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import MovieList from './movielist/movielist.js';


class App extends Component {
    render() {
        return (
            <div className = "App">
            	<Header />
            	<Section1 sectionTitle="Scraped movies">
            		<MovieList />
            	</Section1>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>   
            	           <Section2 sectionTitle="Saved Movies">
            		          Saved movies go here
            	           </Section2>
                        </Col>
                        <Col md={6}>
                           <Section2 sectionTitle="Movie Notes">
                              movie notes go here
                           </Section2>
                        </Col>
                    </Row>
                </Grid>          
            </div>
        );
    }
}

export default App;
