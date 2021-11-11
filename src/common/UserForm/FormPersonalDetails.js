import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import "@pathofdev/react-tag-input/build/index.css";
// import ReactTagInput from "@pathofdev/react-tag-input";

import InputGroup from 'react-bootstrap/InputGroup'
export class FormPersonalDetails extends Component {

    static propTypes = {
        handleChange: PropTypes.func.isRequired,
        // handleChangeTS: PropTypes.func.isRequired,
        nextStep: PropTypes.func.isRequired,
        prevStep: PropTypes.func.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        values:PropTypes.object.isRequired
    }


    constructor(props) {
        super(props);

        this.state = {
            items: [""],
        }

        this.handleContinue = this.handleContinue.bind(this);
        this.handleBack = this.handleBack.bind(this);

    }

    shouldComponentUpdate() {
        return true;
    }


  handleContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


 removeClick(i){
    this.setState((prevState) => {
        let items = prevState.items;
        items.splice(i,1);
        return ({
            ...prevState,
            items:items
        })
    });
    // this.props.handleChangeTS(this.state.items.length);

 }

 addClick(){
    this.setState(prevState => ({ items: [...prevState.items, '']}))
    // this.props.handleChangeTS(this.state.items.length);

  }

  createUI(){
    return this.state.items.map((el, i) => 
        (
            <div
                id={i}
                key={el}
            >
                <InputGroup className="mb-3 w-75">
                    <Form.Control
                        aria-describedby="basic-addon2"
                        aria-label="Recipient's username"
                        placeholder="Recipient's username"
                    />

                    <Form.Control
                        aria-describedby="basic-addon2"
                        aria-label="Recipient's username"
                        placeholder="Recipient's username"
                    />

                    <button
                        id="button-addon2"
                        onClick={this.removeClick.bind(this, i)}
                        type="button"
                        variant="outline-secondary"
                    >
                        Remove
                    </button>
                </InputGroup>
            </div>
        )          
    )
 }

  handleBack = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    return (
        <div
            fullWidth
            maxWidth='sm'
            open
        >

            {this.state.items.length}

            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="ProjectDetails"
                >

                    {/* <Form.Control 
                        onChange={this.props.handleChange('team_size')}
                        placeholder="Team Size"
                        type="number"
                        value={this.props.values.team_size}
                    /> */}

                    {this.createUI()} 

                    <input
                        onClick={this.addClick.bind(this)}
                        type='button'
                        value={this.state.items.length<2?"add team bros":"add more hoes"}
                    />


                    



                    {/* <InputGroup className="mb-3 w-75">
                        <Form.Control
                            aria-describedby="basic-addon2"
                            aria-label="Recipient's username"
                            placeholder="Recipient's username"
                        />

                        <Form.Control
                            aria-describedby="basic-addon2"
                            aria-label="Recipient's username"
                            placeholder="Recipient's username"
                        />

                        <button
                            id="button-addon2"
                            type="button"
                            variant="outline-secondary"
                        >
                            Button
                        </button>
                    </InputGroup> */}

                    <Form.Control 
                        onChange={this.props.handleChange('project_name')}
                        placeholder="Project Name"
                        type="text"
                        value={this.props.values.project_name}
                    />

                    <Form.Control 
                        as="textarea"
                        onChange={this.props.handleChange('project_description')}
                        placeholder="Project Description"
                        value={this.props.values.project_description}
                    />

                    {/* <ReactTagInput 
                        onChange={(newTags) => this.props.handleChangeTags(newTags)} 
                        tags={this.props.values.project_tags}
                    /> */}



                    <div className="form-floating">
                        <select
                            aria-label="hello"
                            className="form-select"
                            id="floatingSelect"
                            onChange={this.props.handleChange('stage')}
                        >

                            <option
                                selected
                                value="Initiation"
                            >
                                Initiation
                            </option>

                            <option value="Planning">
                                Planning
                            </option>

                            <option value="Execution">
                                Execution
                            </option>

                            <option value="Monitoring and Controlling">
                                Monitoring and Controlling
                            </option>

                            <option value="Concluding">
                                Concluding
                            </option>
                        </select>

                        <label htmlFor="floatingSelect">
                            Stage of project
                        </label>
                    </div>

                </Form.Group>

            </Form>

            <button
                color="secondary"
                onClick={this.handleBack}
                type="button"
                variant="contained"
            >
                Back

            </button>

            <button
                color="primary"
                onClick={this.handleContinue}
                type="button"
                variant="contained"
            >
                Continue

            </button>
        </div>
    );
  }
}

export default FormPersonalDetails;