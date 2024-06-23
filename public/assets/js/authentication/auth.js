const actionCodeSettings = {
    url: 'https://hssrpstudy-emotional-resonance.web.app/',
    handleCodeInApp: true
};

async function signin (email) {
    try {
        await fb.fbauth.sendSignInLinkToEmail(fb.auth, email, actionCodeSettings);
        alert("Dear participant, we have sent you an e-mail message containing the sign-in link. It is likely in your junk/spam folder.\n\nPlease use the sign-in link to enter the study environment.\n\nThank you!");
        window.localStorage.setItem('emailForSignIn', email);
    } catch {
        alert("Dear participant, we do not have your e-mail address on record!\n\nIf you have already registered via the Google form, please wait for an acknowledgement e-mail from the study team.\n\nThank you!")
        window.location.href = "https://forms.gle/dei662ihZNfiUraz6";
    }
}

async function authenticate () {
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
        email = window.prompt('Please provide your email for confirmation');
    }

    try {
        const result = await fb.fbauth.signInWithEmailLink(fb.auth, email, window.location.href);
        return result.user;
    } catch (error) {
        console.log(error)
        alert("Dear participant, your sign-in link has likely expired or has been used already. Please sign-in again.\n\nThank you!");
        window.location.href = "https://hssrpstudy-emotional-resonance.web.app/";
    }
}

async function deauthenticate () {
    await fb.fbauth.signOut(fb.auth);
    window.location.href = "https://hssrpstudy-emotional-resonance.web.app/"
}

export { signin, authenticate, deauthenticate }