import * as int from "/assets/js/interface/interface.js";
import * as fb from "/assets/js/firebase/firebase.js";
import * as store from "/assets/js/storage/storage.js";
import * as auth from "/assets/js/authentication/auth.js";
import * as data from "/assets/js/data/data.js";
import * as gaze from "/assets/js/webgazer/gaze.js";

window.int = int;
window.fb = fb;
window.store = store;
window.auth = auth;
window.data = data;
window.gaze = gaze;

$(async function(){
    if (fb.fbauth.isSignInWithEmailLink(fb.auth, window.location.href)) {
        const user = await auth.authenticate();
        const newuser = !await store.update.checknew(user.uid);
        if (!newuser) {
            alert("Dear participant, you have likely completed the study or have withdrawn. If you have any further inquiries, feel free to e-mail 21janav.nagapatla@acsians.acsi.edu.sg\n\nThank you!");
            window.location.href = "https://hssrpstudy-emotional-resonance.web.app/";
        } else {
            int.navbar("withdraw");
            $('#withdrawalbutton').on('click', () => {
                store.update.withdraw(user.uid);
            });
            window.addEventListener('onbeforeunload', () => {
                store.update.withdraw(user.uid);
            });
            int.maincontent(int.pre.precollect);
            $('#precollectmail').val(user.email);

            await new Promise(function(resolve) {$('#precollectbutton').on("submit", resolve);});
            const minor = await store.update.create($('#precollectname').val(), $('#precollectdob').val(), user.uid);

            int.maincontent(minor ? int.pre.minor1 : int.pre.adult1);
            await new Promise(function(resolve) {$('#consent1').on("submit", resolve);});

            int.maincontent(minor ? int.pre.minor2 : int.pre.adult2);
            await new Promise(function(resolve) {$('#consent2').on("submit", resolve);});

            while (!store.upload.icfsend(document.getElementById("icffile").files[0], user.uid)) {
                alert("Dear user, our system has rejected your PDF file. Please ensure that you are submitting a bona fide PDF file.");
                await new Promise(function(resolve) {$('#consent2').on("submit", resolve);});
            }

            store.update.consent(user.uid);

            int.maincontent(int.study.thanks);
            await new Promise(function(resolve) {$('#thanksproceed').on("click", resolve);});

            $('#fullpage').attr("hidden", "");
            $('#calibration').removeAttr("hidden");
            
            var calibratedval;

            await webgazer.clearData();

            gaze.calibration.start();
            await new Promise(function(resolve) {$('#calibrationcomplete').on("click", resolve);});
            calibratedval = Number($('#calibrationcomplete').html())

            while (calibratedval < 75) {
                $('#calibration').attr("hidden", "");
                $('#fullpage').removeAttr("hidden");

                int.maincontent(int.study.redo);
                await new Promise(function(resolve) {$('#thanksproceed').on("click", resolve);});

                $('#fullpage').attr("hidden", "");
                $('#calibration').removeAttr("hidden");

                await webgazer.clearData();

                gaze.calibration.start();
                await new Promise(function(resolve) {$('#calibrationcomplete').on("click", resolve);});
                calibratedval = Number($('#calibrationcomplete').html())
            }

            $('#calibration').attr("hidden", "");
            $('#fullpage').removeAttr("hidden");

            int.maincontent(int.study.wellcalib);
            await new Promise(function(resolve) {$('#thanksproceed').on("click", resolve);});

            const results = await gaze.study.start();
            results.calibration = calibratedval;
            const studyresults = data.prepare(results);

            int.maincontent(int.post.transmission);
            await new Promise(function(resolve) {$('#transmitbutton').on("click", resolve);});

            await store.upload.datasend(studyresults, user.uid);
            store.update.study(user.uid);

            int.maincontent(int.post.end);
            await new Promise(function(resolve) {$('#logoutbutton').on("click", resolve);});

            auth.deauthenticate()
        }
    } else {
        int.navbar("register");
        int.maincontent(int.pre.landing);
    }
});