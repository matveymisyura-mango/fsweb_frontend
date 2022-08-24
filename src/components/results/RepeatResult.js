import React, {Component} from 'react';
import {NativeSelect} from "@material-ui/core";
import {
    alternativeRepeatActualSubject,
    alternativeRepeatCanQuestion,
    alternativeRepeatCompany,
    alternativeRepeatShalom
} from "../../const/repeatFormConsts";

export class RepeatResult extends Component {


    render() {
        const {handleChange} = this.props;

        const {
            values: {
                repeat_shalom_text,
                name,
                repeat_company_text,
                companyName,
                repeat_can_question_text,
                subject,
                repeat_actual_text,

            }
        } = this.props;

        return (

            <>
                <h4>4. חזרה על משפט פתיחה בקיצור</h4>
                <NativeSelect
                    disableUnderline
                    onChange={handleChange('repeat_shalom_text')}
                    defaultValue={repeat_shalom_text}>
                    {alternativeRepeatShalom?.map((text, i) => {
                        return (<option value={text.value} key={text.value}>{text.value}</option>)
                    })}
                </NativeSelect>
                {name} ,
                <NativeSelect
                    disableUnderline
                    onChange={handleChange('repeat_company_text')}
                    defaultValue={repeat_company_text}>
                    {alternativeRepeatCompany?.map((text, i) => {
                        return (<option value={text.value} key={text.value}>{text.value}</option>)
                    })}
                </NativeSelect>
                {companyName} .
                <NativeSelect
                    disableUnderline
                    onChange={handleChange('repeat_can_question_text')}
                    defaultValue={repeat_can_question_text}>
                    {alternativeRepeatCanQuestion?.map((text, i) => {
                        return (<option value={text.value} key={text.value}>{text.value}</option>)
                    })}
                </NativeSelect>
                {subject}
                <NativeSelect
                    disableUnderline
                    onChange={handleChange('repeat_actual_text')}
                    defaultValue={repeat_actual_text}>
                    {alternativeRepeatActualSubject?.map((text, i) => {
                        return (<option value={text.value} key={text.value}>{text.value}</option>)
                    })}
                </NativeSelect> ?
            </>
        );
    }
}

export default RepeatResult;
