import React, {Component} from 'react';
import {NativeSelect} from "@material-ui/core";
import {alternativeFinalOkay, alternativeOurSpecialistWillCall} from "../../const/thirdFormConsts";

export class FinalPropositionalResult extends Component {
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
        const {handleChange} = this.props;

        const {
            values: {
                okay_text,
                will_call_text,
                third_final_text

            }
        } = this.props;

        return (
            <>
                <h4>3. משפט סיום חיובי</h4>
                <NativeSelect
                    disableUnderline
                    onChange={handleChange('okay_text')}
                    defaultValue={okay_text}>
                    {alternativeFinalOkay?.map((text, i) => {
                        return (<option value={text.value} key={text.value}>{text.value}</option>)
                    })}
                </NativeSelect>,
                <NativeSelect
                    disableUnderline

                    onChange={handleChange('will_call_text')}
                    defaultValue={will_call_text}>
                    {alternativeOurSpecialistWillCall?.map((text, i) => {
                        return (<option value={text.value} key={text.value}>{text.value}</option>)
                    })}
                </NativeSelect> .
                {third_final_text} .
            </>
        );
    }
}

export default FinalPropositionalResult;
