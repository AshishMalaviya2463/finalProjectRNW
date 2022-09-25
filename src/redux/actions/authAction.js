import * as ActionTypes from "../ActionTypes"
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase"


export const signUpUserAction = (data) => (dispatch) => {
    try {
        createUserWithEmailAndPassword(auth, data.email, data.pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                sendEmailVerification(user)
                    .then(() => {
                        dispatch({
                            type: ActionTypes.SIGNUP_USER, payload: {
                                text: "Registration Successfull. Please check your mail",
                                navigateTo: '/login'
                            }
                        })

                        setTimeout(() => {
                            dispatch({ type: ActionTypes.CLEARE_TEXT })
                        }, [2000])
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    console.log("This E-mail is Already Registered.")
                    dispatch({ type: ActionTypes.ERROR, payload: "This E-mail is Already Registered." })

                    setTimeout(() => {
                        dispatch({ type: ActionTypes.CLEARE_TEXT })
                    }, [2000])
                } else {
                    console.log(errorCode)
                    dispatch({ type: ActionTypes.ERROR, payload: errorCode })

                    setTimeout(() => {
                        dispatch({ type: ActionTypes.CLEARE_TEXT })
                    }, [2000])
                }
            });
    } catch (error) {
        const errorCode = error.code;
        console.log(errorCode)
        dispatch({ type: ActionTypes.ERROR, payload: errorCode })

        setTimeout(() => {
            dispatch({ type: ActionTypes.CLEARE_TEXT })
        }, [2000])
    }

}

export const signInWithGoogleAction = () => (dispatch) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // const user = result.user;
            dispatch({
                type: ActionTypes.LOGIN_USER, payload: {
                    text: "Login Successfull.",
                    navigateTo: "/"
                }
            })

            setTimeout(() => {
                dispatch({ type: ActionTypes.CLEARE_TEXT })
            }, [2000])
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            dispatch({ type: ActionTypes.ERROR, payload: errorCode + " " + errorMessage })

            setTimeout(() => {
                dispatch({ type: ActionTypes.CLEARE_TEXT })
            }, [2000])
        });



}

export const logInUserAction = (data) => (dispatch) => {
    try {
        signInWithEmailAndPassword(auth, data.email, data.pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    dispatch({
                        type: ActionTypes.LOGIN_USER, payload: {
                            text: "Login Successfull.",
                            navigateTo: '/'
                        }
                    })
                } else {
                    dispatch({ type: ActionTypes.ERROR, payload: "Please check your mail" })
                }

                setTimeout(() => {
                    dispatch({ type: ActionTypes.CLEARE_TEXT })
                }, [2000])
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/wrong-password") {
                    dispatch({ type: ActionTypes.ERROR, payload: "Wrong E-mail or password." })

                    setTimeout(() => {
                        dispatch({ type: ActionTypes.CLEARE_TEXT })
                    }, [2000])
                } else if (errorCode === "auth/user-not-found") {
                    dispatch({ type: ActionTypes.ERROR, payload: "E-mail not found." })

                    setTimeout(() => {
                        dispatch({ type: ActionTypes.CLEARE_TEXT })
                    }, [2000])
                }
            });
    } catch (error) {
        const errorCode = error.code;
        console.log(errorCode)
        dispatch({ type: ActionTypes.ERROR, payload: errorCode })

        setTimeout(() => {
            dispatch({ type: ActionTypes.CLEARE_TEXT })
        }, [2000])
    } finally {
        setTimeout(() => {
            dispatch({ type: ActionTypes.CLEARE_TEXT })
        }, [2000])
    }

}

export const logOutUserAction = () => (dispatch) => {
    try {
        signOut(auth)
            .then(() => {
                console.log("LogOut Successfull.")
                dispatch({
                    type: ActionTypes.LOGOUT_USER, payload: {
                        text: "LogOut Successfull."
                    }
                })

                setTimeout(() => {
                    dispatch({ type: ActionTypes.CLEARE_TEXT })
                }, [2000])
            })
            .catch((e) => {
                console.log(e)
                dispatch({ type: ActionTypes.ERROR, payload: e })

                setTimeout(() => {
                    dispatch({ type: ActionTypes.CLEARE_TEXT })
                }, [2000])
            })
    } catch (e) {
        console.log(e)
        dispatch({ type: ActionTypes.ERROR, payload: e })

        setTimeout(() => {
            dispatch({ type: ActionTypes.CLEARE_TEXT })
        }, [2000])
    }
    setTimeout(() => {
        dispatch({ type: ActionTypes.CLEARE_TEXT })
    }, [2000])
}