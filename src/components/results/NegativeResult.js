import React, {Component} from 'react';

export class NegativeResult extends Component {

    render() {
        // const {handleChange} = this.props;

        const {
            values: {
                negative_answer
            }
        } = this.props;

        return (

            <>
                <h4>5. משפט סיום למקרה של תשובה שלילית</h4>
                {negative_answer}
            </>
        );
    }
}

export default NegativeResult;
