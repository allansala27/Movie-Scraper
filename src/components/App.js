import React, { Component } from 'react';
import Header from './header/header';
import Section from './section/section';



class App extends Component {
    render() {
        return (
            <div className = "App">
            	<Header />
            	<Section sectionTitle="Scraped movies">
            		scraped movies go here
            	</Section>
            	<Section sectionTitle="Movie Notes">
            		movie notes go here
            	</Section>
            </div>
        );
    }
}

export default App;
