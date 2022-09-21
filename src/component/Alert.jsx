import React from 'react'
import { useSnackbar, SnackbarProvider } from 'notistack'

const Alert = () => {

    const { enqueueSnackbar } = useSnackbar();

    enqueueSnackbar("Something went wrong", {
        variant: "error",
        autoHideDuration: 3000
    });


    return (
        <>

        </>
    )
}

export default Alert