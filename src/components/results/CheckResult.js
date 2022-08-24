import React, {Component} from 'react';

export class CheckResult extends Component {

    render() {
        const {handleChange} = this.props;

        const {
            values: {
                dont_understand_but_check_text
            }
        } = this.props;

        return (

            <>
                <h4>לא מבין אבל תבדוק</h4>
                {dont_understand_but_check_text}
            </>
        );
    }
}

export default CheckResult;
