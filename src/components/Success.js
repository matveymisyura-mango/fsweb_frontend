import React from 'react';
import Dialog from '@material-ui/core/Dialog';


const Success = () => {

    return (
        <>
            <Dialog

                open
                fullWidth
                maxWidth='sm'
            >
                <h1 style={{textAlign: 'center'}}>נא לבדוק את המייל</h1>
            </Dialog>
        </>

    );
}


export default Success;
