import React, {Component} from 'react';
import {NativeSelect} from "@material-ui/core";
import {
    alternativeShalom,
    alternativeSpeak,
    alternativeCompany,
    alternativeHot,
    alternativeCanQuestion,
    alternativeActualSubject
}
    from '../../const/fisrtFormConsts';
export class FirstResult extends Component {
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
                name,
                companyName,
                subject,
                option,
                relevant,
                shalom_text,
                speak_text,
                company_text,
                hot_text,
                can_question_text,
                actual_text,
            }
        } = this.props;

        return (

            <>
                <h4>1. שאלת פתיחה</h4>
                <p>
                    {' '}
                    <NativeSelect
                        disableUnderline
                        InputProps={{disableUnderline: true}}
                        onChange={handleChange('shalom_text')}
                        defaultValue={shalom_text}>
                        {alternativeShalom?.map((text) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>
                    ,
                    {' '}
                    <NativeSelect
                        disableUnderline
                        onChange={handleChange('speak_text')}
                        defaultValue={speak_text}>
                        {alternativeSpeak?.map((text, i) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>
                    {' '}
                    {name}
                    .
                    {' '}
                    <NativeSelect
                        disableUnderline
                        onChange={handleChange('company_text')}
                        defaultValue={company_text}>
                        {alternativeCompany?.map((text, i) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>
                    {' '}
                    {companyName}
                    .
                    {' '}
                    {option && (<NativeSelect
                        disableUnderline
                        onChange={handleChange('hot_text')}
                        defaultValue={hot_text}>
                        {alternativeHot?.map((text) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>)}
                    {' '}
                    <NativeSelect
                        disableUnderline
                        onChange={handleChange('can_question_text')}
                        defaultValue={can_question_text}>
                        {alternativeCanQuestion?.map((text, i) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>
                    {' '}
                    {subject}
                    {' '}
                    {relevant}
                    {' '}
                    <NativeSelect
                        disableUnderline

                        onChange={handleChange('actual_text')}
                        defaultValue={actual_text}>
                        {alternativeActualSubject?.map((text, i) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>
                    ?
                    {' '}
                </p>
            </>
        );
    }
}

export default FirstResult;
