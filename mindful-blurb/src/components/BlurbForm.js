import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'

class BlurbForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            topic: "",
            emotion: "",
            body: "",
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
                <Button 
                className="btn-show-form" 
                bsStyle="warning"
                // onClick="showForm"
                >
                Cheeto For A Thot
                </Button>
                <Form horizontal
                // className="Container"
                >

                    <FormGroup controlId="formHorizontalTitle">
                        <Col componentClass={ControlLabel} sm={2}>
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
                        <Col componentClass={ControlLabel} sm={2}>
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
                        <Col componentClass={ControlLabel} sm={2}>
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

                    {/* <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={this.state.title}/>
                    <label htmlFor="topic">Topic</label>
                        <input type="select" name="topic" value={this.state.topic}/>
                    <label htmlFor="mood">Mood</label>
                        <input type="select" name="mood" value={this.state.emotion}/>
                    <label htmlFor="body">Blurb Here!</label>
                        <textarea name="body" id="body" maxLength="240">{this.state.body}</textarea> */}
                </Form>

            </div>
        );
    }
}

export default BlurbForm;


