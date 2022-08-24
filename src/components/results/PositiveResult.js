import React, {Component} from 'react';
import {NativeSelect} from "@material-ui/core";
import {alternativePositiveFirst, alternativePositiveSecond} from "../../const/positiveFormConsts";

export class PositiveResult extends Component {

    render() {
        const {handleChange} = this.props;

        const {
            values: {
                positive_first_text,
                positive_second_text,
                positive_third_text,
                positive_fourth_text,
            }
        } = this.props;

        return (

            <>
                <h4>6. תשובות חיוביות</h4>
                <NativeSelect
                    disableUnderline
                    onChange={handleChange('positive_first_text')}
                    defaultValue={positive_first_text}>
                    {alternativePositiveFirst?.map((text, i) => {
                        return (<option value={text.value} key={text.value}>{text.value}</option>)
                    })}
                </NativeSelect>,
                <NativeSelect
                    disableUnderline
                    onChange={handleChange('positive_second_text')}
                    defaultValue={positive_second_text}>
                    {alternativePositiveSecond?.map((text, i) => {
                        return (<option value={text.value} key={text.value}>{text.value}</option>)
                    })}
                </NativeSelect>
                {positive_third_text}
                {' '}
                {positive_fourth_text}.
            </>
        );
    }
}

export default PositiveResult;
