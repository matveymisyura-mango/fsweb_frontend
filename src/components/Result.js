import React, {useRef, useState} from 'react';
import {Grid} from "@material-ui/core";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import FirstQuestionResult from "./results/FirstResult";
import SecondResult from "./results/SecondResult";
import FinalPropositionalResult from "./results/FinalPropositionalResult";
import RepeatResult from "./results/RepeatResult";
import NegativeResult from "./results/NegativeResult";
import PositiveResult from "./results/PositiveResult";

import {formatQuestions} from "../helpers";
import axios from "axios";


export const Result = (props) => {
    let next = e => {
        e.preventDefault();
        // PROCESS FORM //
        props.nextStep();
    };

    let back = e => {
        e.preventDefault();
        props.prevStep();
    };
    const {full} = props;
    const {handleChange} = props;
    const values = props.values;

    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const errorRef = useRef(null);


    const handleSend = async (e) => {
        setSent(true)
        const auth_token = 'Token ' + process.env.REACT_APP_AUTH_TOKEN
        await axios.post(process.env.REACT_APP_API_URL + 'scenario_constructor/',
            formatQuestions(values),
            {
                headers: {
                    'Authorization': auth_token
                }
            })
            .then((res) => {
                next(e);
                setError('')
            })
            .catch((err) => {
                    console.log(err)
                    setError('Something went wrong. Try again later')
                    setSent(false)
                    errorRef.current.scrollIntoView({behavior: 'smooth'});
                }
            )

    }
    return (<div>

            {full && (

                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        <div style={{direction: "rtl", whiteSpace: 'pre-wrap'}}>
                            <FirstQuestionResult
                                handleChange={handleChange}
                                prevStep={back}
                                values={props.values}/>
                            <hr/>
                            <SecondResult
                                handleChange={handleChange}
                                prevStep={back}
                                values={props.values}/>
                            <hr/>

                            <FinalPropositionalResult
                                handleChange={handleChange}
                                prevStep={back}
                                values={props.values}/>


                            <hr/>
                            <RepeatResult
                                handleChange={handleChange}
                                prevStep={back}
                                values={props.values}
                            />
                            <hr/>

                            <NegativeResult
                                handleChange={handleChange}
                                prevStep={back}
                                values={props.values}
                            />
                            <hr/>

                            <PositiveResult
                                handleChange={handleChange}
                                prevStep={back}
                                values={props.values}
                            />
                            <hr/>


                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <p style={{textAlign: 'center'}}>Enter your email</p>
                        <TextField
                            type="email"
                            onChange={handleChange('client_email')}
                            defaultValue={values.client_email}
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4} style={{marginRight: '15px'}}>
                        <p style={{textAlign: 'center'}}>Enter scenario name</p>
                         <TextField
                            type="email"
                            onChange={handleChange('scenario_name')}
                            defaultValue={values.scenario_name}
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={1} className="mr-3">
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={back}
                            >Back</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={handleSend}
                                disabled={!values.client_email || !values.scenario_name || sent}
                            >{sent && (
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            )}Send</Button>
                        </Grid>
                    </Grid>
                    {error && (
                        <Grid item xs={4} className="mt-4">
                            <div ref={errorRef} className="p-3 mb-2 bg-danger text-white">{error}</div>
                        </Grid>)}
                </Grid>)}
        </div>

    );

}

export default Result;
