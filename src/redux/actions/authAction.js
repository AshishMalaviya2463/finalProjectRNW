import * as ActionTypes from "../ActionTypes"
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase"
import { history } from "../../history"

export const signUpUserAction = (data) => (dispatch) => {
    try {
        createUserWithEmailAndPassword(auth, data.email, data.pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                sendEmailVerification(user)
                    .then(() => {
                        console.log("Registration Successfull. Please check your mail")
                        dispatch({ type: ActionTypes.SIGNUP_USER, payload: "Registration Successfull. Please check your mail" })
                        setTimeout(() => {
                            dispatch({ type: ActionTypes.CLEARE_TEXT })
                        }, [1000])
                    })
                history.push('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    console.log("This E-mail is Already Registered.")
                    dispatch({ type: ActionTypes.ERROR, payload: "This E-mail is Already Registered." })
                } else {
                    console.log(errorCode)
                    dispatch({ type: ActionTypes.ERROR, payload: errorCode })
                }
            });
    } catch (error) {
        const errorCode = error.code;
        console.log(errorCode)
        dispatch({ type: ActionTypes.ERROR, payload: errorCode })
    }

}

export const signInWithGoogleAction = () => (dispatch) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            dispatch({ type: ActionTypes.LOGIN_USER, payload: "Login Successfull. " })
            history.push("/")
            setTimeout(() => {
                dispatch({ type: ActionTypes.CLEARE_TEXT })
            }, [1000])
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            dispatch({ type: ActionTypes.ERROR, payload: errorCode + " " + errorMessage })
        });



}

export const logInUserAction = (data) => (dispatch) => {
    try {
        signInWithEmailAndPassword(auth, data.email, data.pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    dispatch({ type: ActionTypes.LOGIN_USER, payload: "Login Successfull. " })
                    history.push("/")
                } else {
                    dispatch({ type: ActionTypes.ERROR, payload: "Please check your mail" })
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/wrong-password") {
                    dispatch({ type: ActionTypes.ERROR, payload: "Wrong E-mail or password." })
                } else if (errorCode === "auth/user-not-found") {
                    dispatch({ type: ActionTypes.ERROR, payload: "E-mail not found." })
                }
            });
    } catch (error) {
        const errorCode = error.code;
        console.log(errorCode)
        dispatch({ type: ActionTypes.ERROR, payload: errorCode })
    }
    setTimeout(() => {
        dispatch({ type: ActionTypes.CLEARE_TEXT })
    }, [1000])
}

export const logOutUserAction = () => (dispatch) => {
    try {
        signOut(auth)
            .then(() => {
                console.log("LogOut Successfull.")
                dispatch({ type: ActionTypes.LOGOUT_USER, payload: "LogOut Successfull." })
            })
            .catch((e) => {
                console.log(e)
                dispatch({ type: ActionTypes.ERROR, payload: e })
            })
    } catch (e) {
        console.log(e)
        dispatch({ type: ActionTypes.ERROR, payload: e })
    }
    setTimeout(() => {
        dispatch({ type: ActionTypes.CLEARE_TEXT })
    }, [1000])
}