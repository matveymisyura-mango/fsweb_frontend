import React, {Component} from 'react';

export class DontHearResult extends Component {

    render() {
        // const {handleChange} = this.props;

        const {
            values: {
                dont_hear_text
            }
        } = this.props;

        return (

            <>
                <h4>לא שומע</h4>
                {dont_hear_text}
            </>
        );
    }
}

export default DontHearResult;
