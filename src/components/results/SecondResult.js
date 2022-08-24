import React, {Component} from 'react';
import {NativeSelect} from "@material-ui/core";

import {alternativeInclude, alternativeInteresting, alternativeProposition} from "../../const/secondFormConsts";

export class SecondResult extends Component {
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
                product_description,
                first_preference,
                second_preference,
                third_preference,
                fourth_preference,
                interesting_text,
                proposition_text,
                include_text,
            }
        } = this.props;

        return (

            <>
                <h4>2. הצגת המוצר</h4>
                <p>
                    {' '}
                    <NativeSelect
                        disableUnderline
                        onChange={handleChange('proposition_text')}
                        defaultValue={proposition_text}>
                        {alternativeProposition?.map((text, i) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>
                    :
                    {' '}
                    {product_description}

                    <NativeSelect
                        disableUnderline
                        onChange={handleChange('include_text')}
                        defaultValue={include_text}>
                        {alternativeInclude?.map((text, i) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>
                    :
                    <span style={{marginRight:'30%'}}>
                    <NativeSelect
                        disableUnderline
                        onChange={handleChange('include_text')}
                        defaultValue={interesting_text}>
                        {alternativeInteresting?.map((text, i) => {
                                return (
                                    <option value={text.value} key={text.value}>{text.value}</option>
                                )
                            }
                        )}
                    </NativeSelect>?
                    </span>
                    <p>{first_preference},</p>
                    <p>{second_preference},</p>
                    <p>{third_preference},</p>
                    <p>{fourth_preference},</p>

                </p>
            </>


        );
    }
}

export default SecondResult;
