import * as fb from "/assets/js/firebase/firebase.js";

async function checknew (uid) {
    const checkingfor = await fb.fbdb.getDoc(fb.fbdb.doc(fb.db, "users", uid));
    const checked = await checkingfor.exists();
    return checked;
}

async function create (name, textdob, uid) {
    const dob = new Date(textdob);
    const month_diff = Date.now() - dob.getTime();  
    const age_dt = new Date(month_diff);   
    const year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970);

    await fb.fbdb.setDoc(fb.fbdb.doc(fb.db, "users", uid), {
        consent: false,
        minor: age < 21,
        name: name,
        study: false,
        withdrawal: false
    });

    return (age < 21);
}

async function consent (uid) {
    await fb.fbdb.updateDoc(fb.fbdb.doc(fb.db, "users", uid), {
        consent: true
    });
}

async function study (uid) {
    await fb.fbdb.updateDoc(fb.fbdb.doc(fb.db, "users", uid), {
        study: true
    });
}

async function withdraw (uid) {
    if (!confirm("Dear participant, are you sure you wish to withdraw? If you withdraw, all your data will be removed from our servers and your account will be declared inaccessible\n\nTo withdraw, press 'OK'. To cancel your request and resume your participation in this study, press 'Cancel'")) {
        return false;
    }
    
    try {
        await fb.fbdb.updateDoc(fb.fbdb.doc(fb.db, "users", uid), {
            withdrawal: true
        });
        const storageRef = fb.fbstorage.ref(fb.storage, `data/${uid}.eyedata`);
        await fb.fbstorage.deleteObject(storageRef);
        alert("Dear participant, we have deleted all data collected from you during the course of this study, barring name and status as a minor (for documentary purposes).\n\nYour Informed Consent Form remains on our system but is now invalidated. If you have any residual concerns about data privacy, please do not hesitate to contact us!\n\nThank you and have a nice day!")
    } catch {
        alert("Dear participant, you have yet to authorise your data to be uploaded, so the research team does not possess data collected from you in this study.\n\nYour Informed Consent Form, if uploaded, remains on our system but is now invalidated. If you have any residual concerns about data privacy, please do not hesitate to contact us!\n\nThank you and have a nice day!");
    }

    alert("You will now be logged out and your account will be marked inaccessible.\n\nIf you wish to rejoin the study, you may contact the study team via e-mail such that we may reinstate your access to the portal and validate your Informed Consent Form.")

    auth.deauthenticate();
}

export { checknew, create, consent, study, withdraw }