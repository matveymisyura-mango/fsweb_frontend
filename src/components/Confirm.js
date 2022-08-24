import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, companyName, subject, option, relevant }
    } = this.props;
    return (

        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={companyName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={subject} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={option} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={relevant} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>

    );
  }
}

export default Confirm;
