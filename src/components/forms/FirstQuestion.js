import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Checkbox, Grid} from "@material-ui/core";
import {FirstResult} from '../results/FirstResult'

export class FirstQuestion extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, handleChange, checkboxChange} = this.props;
        return (
            <Grid container justifyContent="flex-start" style={{direction: 'rtl'}}>
                <Grid item xs={12} style={{fontSize: '18px'}}>
               
                </Grid>
                <Grid item xs={4}>
                    <AppBar title="Enter User Details"/>
                    <span>שם של נציגה בתסריט</span>
                    <TextField
                        onChange={handleChange('name')}
                        defaultValue={values.name}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <span>שם העסק בתסריט</span>
                    <TextField
                        onChange={handleChange('companyName')}
                        defaultValue={values.companyName}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <span> נושא / תחום / עניין של העסק שלכם</span>
                    <TextField
                        InputLabelProps={{shrink: true}}
                        onChange={handleChange('subject')}
                        defaultValue={values.subject}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <br/>
                    <span style={{color: 'grey'}}>
                    יש לסמן במקרה שהרשימה היא חמה . אם רשימה קרה - לדלג
            <Checkbox
                label="Option"
                onChange={checkboxChange('option')}
                defaultValue={values.option}
                color="default"/>
                    </span>
                    <hr/>
                    <span>קהל יעד</span>
                    <TextField
                        onChange={handleChange('relevant')}
                        defaultValue={values.relevant}
                        margin="normal"
                        fullWidth
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >Continue</Button>
                </Grid>

                <Grid item xs={12}>
                    <hr/>
                    <FirstResult
                        handleChange={handleChange}
                        prevStep={this.prevStep}
                        values={values}/>
                </Grid>
            </Grid>
        );
    }
}

export default FirstQuestion;
