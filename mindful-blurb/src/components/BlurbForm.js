import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'

class BlurbForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            topic: "",
            emotion: "",
            blurb: "",
            // showForm: false
        }
    }
    handleChange = (e) => {
        console.log(this.state)
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key] : value
        })
    }
    
    // showForm = () => 

    
    render() {
        return (
            <div className="container">
                

                <Form horizontal
                // componentClass={ControlLabel}
                // className="Container"
                >
                    <FormGroup controlId="formHorizontalTitle">
                        <Col 
                        // componentClass={ControlLabel} 
                        sm={2}>
                        Title
                        </Col>
                        <Col sm={10}>
                        <FormControl
                        type="text"
                        name="title" 
                        value= {this.state.title}
                        placeholder="Title" 
                        onChange= {this.handleChange}                     
                        />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTopic">
                        <Col 
                        // componentClass={ControlLabel} 
                        sm={2}>
                        Topic
                        </Col>
                        <Col sm={10}>
                        <FormControl type="text" 
                        name="topic" 
                        value={this.state.topic}
                        placeholder="Topic" 
                        onChange= {this.handleChange}
                        />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalTopic">
                        <Col 
                        // componentClass={ControlLabel} 
                        sm={2}>
                        Emotion
                        </Col>
                        <Col sm={10}>
                        <FormControl type="text" 
                        name="emotion" 
                        value={this.state.emotion}
                        placeholder="How Are You Feeling" 
                        onChange= {this.handleChange}
                        />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Cheeto For Your Thots</ControlLabel>
                        <FormControl 
                        name="blurb"
                        componentClass="textarea" 
                        placeholder="What's on your mind, eh Bucko?" 
                        value={this.state.blurb}
                        onChange={this.handleChange}
                        maxLength="240"
                        />
                    </FormGroup>
                    <p>characters: this.state.count/240</p>
                </Form>
                <br/>
                <Button 
                className="btn-show-form" 
                bsStyle="warning"
                // onClick="showForm"
                >
                Blurbles For Today
                </Button>

            </div>
        );
    }
}

export default BlurbForm;


