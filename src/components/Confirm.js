import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export default class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // Processing form //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { firstname, lastname, city, email, bio, occupation } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm" />
                    <List>
                        <ListItem primaryText="First Name" secondaryText={firstname}></ListItem>
                        <ListItem primaryText="Last Name" secondaryText={lastname}></ListItem>
                        <ListItem primaryText="Email" secondaryText={email}></ListItem>
                        <ListItem primaryText="City" secondaryText={city}></ListItem>
                        <ListItem primaryText="Occupation" secondaryText={occupation}></ListItem>
                        <ListItem primaryText="Bio" secondaryText={bio}></ListItem>
                    </List>
                    <RaisedButton label="Back" primary={false} styles={styles.button} onClick={this.back}></RaisedButton>
                    <RaisedButton label="Confirm" primary={true} styles={styles.button} onClick={this.continue}></RaisedButton>
                </React.Fragment >
            </MuiThemeProvider >
        )
    }
}


const styles = {
    button: {
        margin: 15
    }
}