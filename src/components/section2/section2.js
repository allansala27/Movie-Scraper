import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

export default class Section extends Component {
	render(){
		return(
			<div className="section">
			<Grid>
                <Row className="show-grid">
                    <Col xs={6}>
                        <h2>{this.props.sectionTitle}</h2>
                    </Col>
                </Row>
    			<Row className="show-grid">
      				<Col xs={6}>
      					<Panel>
      						{this.props.children} 
    					</Panel>
      				</Col>
    			</Row>
  			</Grid>
  			</div>
		);
	}
}