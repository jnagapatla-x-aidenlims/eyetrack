import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js"
import * as fbauth from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import * as fbcheck from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app-check.js"
import * as fbstorage from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js"
import * as fbdb from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyCuUUCgl3nKgSt1zJT9C90qJ_9hK-DqvNs",
    authDomain: "hssrp-acsi-p4---janav-aiden.firebaseapp.com",
    projectId: "hssrp-acsi-p4---janav-aiden",
    storageBucket: "hssrp-acsi-p4---janav-aiden.appspot.com",
    messagingSenderId: "1065080041265",
    appId: "1:1065080041265:web:de4616f529421b4b67ca10"
};

const app = initializeApp(firebaseConfig);
const auth = fbauth.getAuth(app);
const appCheck = fbcheck.initializeAppCheck(app, {
    provider: new fbcheck.ReCaptchaEnterpriseProvider("6LeL-8kpAAAAAP9WL72MqHXj60MUwDnjcf-3k-Hn"),
    isTokenAutoRefreshEnabled: true
});
const storage = fbstorage.getStorage();
const db = fbdb.getFirestore(app);

export { app, auth, appCheck, storage, db, fbauth, fbcheck, fbstorage, fbdb }