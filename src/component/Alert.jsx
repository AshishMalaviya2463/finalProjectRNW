import React from 'react'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

const Alert = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const auth = useSelector(state => state.auth)
    console.log(auth)

    useEffect(() => {
        if (auth.text !== '') {
            enqueueSnackbar(auth.text, {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })

            setTimeout(() => {
                closeSnackbar()
            }, 2000)
        } else if (auth.error) {
            enqueueSnackbar(auth.error, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })

            setTimeout(() => {
                closeSnackbar()
            }, 2000)
        }
    }, [auth])

    return (
        <>

        </>
    )
}

export default Alert