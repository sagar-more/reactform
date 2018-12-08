import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Succes from './Success';

export default class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            firstname: '',
            lastname: '',
            email: '',
            city: '',
            bio: '',
            occupation: ''
        };
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //back to previous state
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //handle changes
    handleChanges = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, bio, email, occupation, city } = this.state;
        const values = { firstname, lastname, bio, email, occupation, city };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChanges}
                        values={values}>
                    </FormUserDetails>
                )

            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChanges}
                        values={values}
                    ></FormPersonalDetails>
                )

            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    ></Confirm>
                )

            case 4:
                return <Succes></Succes>

            default:
                break;
        }
    }
}


