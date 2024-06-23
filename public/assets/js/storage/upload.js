import * as fb from "/assets/js/firebase/firebase.js";

async function icfsend (icffile, uid) {
    try {
        const storageRef = fb.fbstorage.ref(fb.storage, `icf/${uid}.pdf`);
        await fb.fbstorage.uploadBytes(storageRef, icffile);
        return true
    } catch {
        return false;
    }
}

async function datasend (datafile, uid) {
    const storageRef = fb.fbstorage.ref(fb.storage, `data/${uid}.eyedata`);
    await fb.fbstorage.uploadBytes(storageRef, datafile);
}

export { icfsend, datasend }