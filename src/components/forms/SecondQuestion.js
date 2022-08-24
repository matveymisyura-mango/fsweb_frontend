import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";
import SecondResult from "../results/SecondResult";

export class SecondQuestion extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {

        const {values, handleChange} = this.props;

        return (
            <Grid container style={{direction: "rtl"}}>

                <Grid item xs={4} justifyContent="flex-start" style={{direction: 'rtl'}}>
                    <span>מוצר עם תיאור שיווקי עם ערך ללקוח</span>
                    <TextField
                        onChange={handleChange('product_description')}
                        defaultValue={values.product_description}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <span>יתרון ראשון כלפי מתחרים / סיבות להשתמש במוצר שלי</span>
                    <TextField
                        onChange={handleChange('first_preference')}
                        defaultValue={values.first_preference}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <span>יתרון שני כלפי מתחרים / סיבות להשתמש במוצר שלי</span>
                    <TextField
                        onChange={handleChange('second_preference')}
                        defaultValue={values.second_preference}
                        margin="normal"
                        fullWidth
                    />
                    <span>יתרון שלישי כלפי מתחרים / סיבות להשתמש במוצר שלי</span>
                    <TextField
                        onChange={handleChange('third_preference')}
                        defaultValue={values.third_preference}
                        margin="normal"
                        fullWidth
                    />
                    <span>יתרון רביעי כלפי מתחרים / סיבות להשתמש במוצר שלי</span>
                    <TextField
                        onChange={handleChange('fourth_preference')}
                        defaultValue={values.fourth_preference}
                        margin="normal"
                        fullWidth
                    />
                    <br/>
                    <br/>
                    <Grid container spacing={10}>
                        <Grid item xs={2}>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={this.back}
                            >Back</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.continue}
                            >Continue</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <hr/>
                    <SecondResult
                        page={2}
                        handleChange={handleChange}
                        prevStep={this.prevStep}
                        values={values}/>
                </Grid>
            </Grid>
        );
    }
}

export default SecondQuestion;
