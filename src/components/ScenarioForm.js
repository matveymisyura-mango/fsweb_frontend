import React, {Component} from 'react';
import FirstQuestion from './forms/FirstQuestion';
import SecondQuestion from './forms/SecondQuestion';
import Success from './Success';
import Result from "./Result";
import {
    alternativeActualSubject,
    alternativeCanQuestion,
    alternativeCompany,
    alternativeHot,
    alternativeShalom,
    alternativeSpeak
} from "../const/fisrtFormConsts";
import {alternativeInclude, alternativeInteresting, alternativeProposition} from "../const/secondFormConsts";
import {alternativeFinalOkay, alternativeOurSpecialistWillCall} from "../const/thirdFormConsts";
import {
    alternativeRepeatActualSubject,
    alternativeRepeatCanQuestion,
    alternativeRepeatCompany,
    alternativeRepeatShalom
} from "../const/repeatFormConsts";
import {alternativePositiveFirst, alternativePositiveSecond} from "../const/positiveFormConsts";

export class ScenarioForm extends Component {
    state = {
        step: 1,
        name: '',
        companyName: '',
        subject: '',
        option: false,
        relevant: '',
        product_description: '',
        first_preference: '',
        second_preference: '',
        third_preference: '',
        fourth_preference: '',
        shalom_text: alternativeShalom[0].value,
        speak_text: alternativeSpeak[0].value,
        company_text: alternativeCompany[0].value,
        hot_text: alternativeHot[0].value,
        can_question_text: alternativeCanQuestion[0].value,
        actual_text: alternativeActualSubject[0].value,
        proposition_text: alternativeProposition[0].value,
        include_text: alternativeInclude[0].value,
        interesting_text: alternativeInteresting[0].value,
        okay_text: alternativeFinalOkay[0].value,
        will_call_text: alternativeOurSpecialistWillCall[0].value,
        third_final_text: 'הישארו זמינים',
        repeat_shalom_text: alternativeRepeatShalom[0].value,
        repeat_company_text: alternativeRepeatCompany[0].value,
        repeat_can_question_text: alternativeRepeatCanQuestion[0].value,
        repeat_actual_text: alternativeRepeatActualSubject[0].value,
        negative_answer: 'אוקיי, תודה רבה  שיהיה אחלה יום!',
        positive_first_text: alternativePositiveFirst[0].value,
        positive_second_text: alternativePositiveSecond[0].value,
        positive_third_text: 'יצור קשר',
        positive_fourth_text: 'הישארו זמינים',
        dont_hear_text: 'לא שמעתי',
        dont_understand_but_check_text: 'לא חושבת שהבנתי , אבדוק ואחזור',
        client_email: '',
        scenario_name: '',
    };

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        console.log(input);
        this.setState({[input]: e.target.value});
    };
    handleCheckboxChange = input => e => {
        this.setState({[input]: e.target.checked})
    }

    goToStep = (step) => {
        this.setState({'step': step})
    }


    render() {
        const {
            step,
            name,
            companyName,
            subject,
            option,
            relevant,
            product_description,
            first_preference,
            second_preference,
            third_preference,
            fourth_preference,
            shalom_text,
            speak_text,
            company_text,
            hot_text,
            can_question_text,
            actual_text,
            proposition_text,
            include_text,
            interesting_text,
            okay_text,
            will_call_text,
            third_final_text,
            repeat_shalom_text,
            repeat_company_text,
            repeat_can_question_text,
            repeat_actual_text,
            negative_answer,
            positive_first_text,
            positive_second_text,
            positive_third_text,
            positive_fourth_text,
            dont_hear_text,
            dont_understand_but_check_text,
            client_email,
            scenario_name
        } = this.state;
        const values = {
            step,
            name,
            companyName,
            subject,
            option,
            relevant,
            product_description,
            first_preference,
            second_preference,
            third_preference,
            fourth_preference,
            shalom_text,
            speak_text,
            company_text,
            hot_text,
            can_question_text,
            actual_text,
            proposition_text,
            include_text,
            interesting_text,
            okay_text,
            will_call_text,
            third_final_text,
            repeat_shalom_text,
            repeat_company_text,
            repeat_can_question_text,
            repeat_actual_text,
            negative_answer,
            positive_first_text,
            positive_second_text,
            positive_third_text,
            positive_fourth_text,
            dont_hear_text,
            dont_understand_but_check_text,
            client_email,
            scenario_name,
        };

        switch (step) {
            case 1:
                return (
                    <>
                        <div style={{textAlign: "center"}}>
                            <span className="step active" onClick={() => this.goToStep(1)}>1</span>
                            <span className="step" onClick={() => this.goToStep(2)}>2</span>
                            <span className="step" onClick={() => this.goToStep(3)}>3</span>
                        </div>
                        <FirstQuestion
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            checkboxChange={this.handleCheckboxChange}
                            values={values}
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <div style={{textAlign: "center"}}>
                            <span className="step finish" onClick={() => this.goToStep(1)}>1</span>
                            <span className="step active" onClick={() => this.goToStep(2)}>2</span>
                            <span className="step" onClick={() => this.goToStep(3)}>3</span>
                        </div>
                        <SecondQuestion
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </>
                );
            case 3:
                return (
                    <>
                        <div style={{textAlign: "center"}}>
                            <span className="step finish" onClick={() => this.goToStep(1)}>1</span>
                            <span className="step finish" onClick={() => this.goToStep(2)}>2</span>
                            <span className="step active" onClick={() => this.goToStep(3)}>3</span>
                        </div>
                        <Result
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            page={3}
                            full={true}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </>
                );
            case 4:
                return <Success/>;
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default ScenarioForm;
