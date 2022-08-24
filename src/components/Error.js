import React from 'react';
import Dialog from '@material-ui/core/Dialog';


const Error = () => {

    return (
        <>
            <Dialog

                open
                fullWidth
                maxWidth='sm'
            >
                <h1 style={{textAlign: 'center'}}>Error</h1>
            </Dialog>
        </>

    );
}


export default Error;
