const landing = `
<div class="container py-5">
<div class="row pt-5">
    <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
        <div class="text-center">
            <h1 class="display-4 fw-bold mb-5" style="color: #00205c;"><strong>Emotional Resonance with&nbsp;Digital Entities.</strong></h1>
            <p class="fs-5 text-muted mb-5"><span style="color: #00205c;">A Study on Affective Responses to Computer-Generated Faces</span></p>
            <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" onSubmit="auth.signin($('#loginemail').val());return false;" data-bs-theme="light">
                <div class="my-2"><input class="border rounded-pill shadow-sm form-control" type="email" id="loginemail" placeholder="Your e-mail address" inputmode="email" required=""></div>
                <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">Sign in</button></div>
            </form>
        </div>
    </div>
    <div class="col-12 col-lg-10 mx-auto">
        <div class="text-center position-relative"><img class="img-fluid" src="/assets/img/register.svg" style="width: 800px;"></div>
    </div>
</div>
</div>`

const precollect = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">You are authenticated!</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">To prepare for participation in this study, please fill in the following fields. Your date of birth is only used to determine your status as an adult or minor, and will not be transmitted to any server. Ensure that all details entered are&nbsp;</span><strong><span style="color: rgb(0, 32, 92);">accurate</span></strong><span style="color: rgb(0, 32, 92);">&nbsp;to aid the investigators in fulfilling the legal duty of administering consent.</span></p>
                <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" id="precollectbutton" onSubmit="return false;" data-bs-theme="light">
                    <div class="vstack gap-3">
                        <div class="input-group"><span class="input-group-text">E-Mail Address</span><input class="form-control" id="precollectmail" type="email" readonly="" inputmode="email" required="" placeholder="user@example.com"></div>
                        <div class="input-group"><span class="input-group-text">Name</span><input class="form-control" id="precollectname" type="text" placeholder="Your full name as per NRIC/FIN records" required=""></div>
                        <div class="input-group"><span class="input-group-text">Date of Birth</span><input class="form-control" id="precollectdob" type="date" required=""></div>
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">I certify that all details entered are accurate</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

const minor1 = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Consent for Minors</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">As you have indicated your age to be </span><strong><span style="color: rgb(0, 32, 92);">below 21 years old</span></strong><span style="color: rgb(0, 32, 92);">, we are legally required to </span><strong><span style="color: rgb(0, 32, 92);">obtain consent</span></strong><span style="color: rgb(0, 32, 92);"> from you </span><strong><span style="color: rgb(0, 32, 92);">and</span></strong><span style="color: rgb(0, 32, 92);"> your parents. Please open the provided study information sheet and </span><strong><span style="color: rgb(0, 32, 92);">read through it</span></strong><span style="color: rgb(0, 32, 92);">&nbsp;with your parents.</span></p><a href="/sis.pdf" class="btn btn-primary" role="button" target="_blank">Open Study Information Sheet</a>
                <p class="fs-5 text-muted mb-5" style="margin-top: 48px;"><span style="color: rgb(0, 32, 92);">Key details:</span><br><br><span style="color: rgb(0, 32, 92);">- This study takes place </span><strong><span style="color: rgb(0, 32, 92);">online</span></strong><span style="color: rgb(0, 32, 92);"> (on this website)</span><br><span style="color: rgb(0, 32, 92);">- All data collected in this study is </span><strong><span style="color: rgb(0, 32, 92);">de-identified</span></strong><span style="color: rgb(0, 32, 92);"> post-collection</span><br><span style="color: rgb(0, 32, 92);">- There is </span><strong><span style="color: rgb(0, 32, 92);">no</span></strong><span style="color: rgb(0, 32, 92);"> direct benefit or compensation for participation</span><br><br><span style="color: rgb(0, 32, 92);">- Participants may </span><strong><span style="color: rgb(0, 32, 92);">withdraw</span></strong><span style="color: rgb(0, 32, 92);"> from the study at any time</span><br><span style="color: rgb(0, 32, 92);">- There is </span><strong><span style="color: rgb(0, 32, 92);">no consequence</span></strong><span style="color: rgb(0, 32, 92);"> to withdrawal from the study</span><br><span style="color: rgb(0, 32, 92);">- Upon withdrawal, all data collected thus far is </span><strong><span style="color: rgb(0, 32, 92);">deleted</span></strong><br><br><span style="color: rgb(0, 32, 92);">- Your webcam will have to be </span><strong><span style="color: rgb(0, 32, 92);">enabled</span></strong><span style="color: rgb(0, 32, 92);"> during the study</span><br><span style="color: rgb(0, 32, 92);">- All webcam video data is analysed and destroyed </span><strong><span style="color: rgb(0, 32, 92);">locally</span></strong><br><span style="color: rgb(0, 32, 92);">- Only the coordinates of your gaze (</span><strong><span style="color: rgb(0, 32, 92);">no video</span></strong><span style="color: rgb(0, 32, 92);">) is transmitted to us</span></p>
                <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" id="consent1" onSubmit="return false;" data-bs-theme="light">
                    <div class="vstack gap-3">
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">I and my parent consent for me to participate in this study</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

const adult1 = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Consent for Adults</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">As you have indicated your age to be </span><strong><span style="color: rgb(0, 32, 92);">above 21 years old</span></strong><span style="color: rgb(0, 32, 92);">, we are legally required to </span><strong><span style="color: rgb(0, 32, 92);">obtain consent</span></strong><span style="color: rgb(0, 32, 92);"> from you. Please open the provided study information sheet and </span><strong><span style="color: rgb(0, 32, 92);">read through it</span></strong><span style="color: rgb(0, 32, 92);">.</span></p><a href="/sis.pdf" class="btn btn-primary" role="button" target="_blank">Open Study Information Sheet</a>
                <p class="fs-5 text-muted mb-5" style="margin-top: 48px;"><span style="color: rgb(0, 32, 92);">Key details:</span><br><br><span style="color: rgb(0, 32, 92);">- This study takes place </span><strong><span style="color: rgb(0, 32, 92);">online</span></strong><span style="color: rgb(0, 32, 92);"> (on this website)</span><br><span style="color: rgb(0, 32, 92);">- All data collected in this study is </span><strong><span style="color: rgb(0, 32, 92);">de-identified</span></strong><span style="color: rgb(0, 32, 92);"> post-collection</span><br><span style="color: rgb(0, 32, 92);">- There is </span><strong><span style="color: rgb(0, 32, 92);">no</span></strong><span style="color: rgb(0, 32, 92);"> direct benefit or compensation for participation</span><br><br><span style="color: rgb(0, 32, 92);">- Participants may </span><strong><span style="color: rgb(0, 32, 92);">withdraw</span></strong><span style="color: rgb(0, 32, 92);"> from the study at any time</span><br><span style="color: rgb(0, 32, 92);">- There is </span><strong><span style="color: rgb(0, 32, 92);">no consequence</span></strong><span style="color: rgb(0, 32, 92);"> to withdrawal from the study</span><br><span style="color: rgb(0, 32, 92);">- Upon withdrawal, all data collected thus far is </span><strong><span style="color: rgb(0, 32, 92);">deleted</span></strong><br><br><span style="color: rgb(0, 32, 92);">- Your webcam will have to be </span><strong><span style="color: rgb(0, 32, 92);">enabled</span></strong><span style="color: rgb(0, 32, 92);"> during the study</span><br><span style="color: rgb(0, 32, 92);">- All webcam video data is analysed and destroyed </span><strong><span style="color: rgb(0, 32, 92);">locally</span></strong><br><span style="color: rgb(0, 32, 92);">- Only the coordinates of your gaze (</span><strong><span style="color: rgb(0, 32, 92);">no video</span></strong><span style="color: rgb(0, 32, 92);">) is transmitted to us</span></p>
                <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" id="consent1" onSubmit="return false;" data-bs-theme="light">
                    <div class="vstack gap-3">
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">I consent to participate in this study</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

const minor2 = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Consent for Minors</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">As you and your parent have given consent for your participation in this study, we will need you and your parent to </span><strong><span style="color: rgb(0, 32, 92);">fill</span></strong><span style="color: rgb(0, 32, 92);"> in the Informed Consent Form and </span><strong><span style="color: rgb(0, 32, 92);">sign</span></strong><span style="color: rgb(0, 32, 92);"> it.</span></p><a class="btn btn-primary" href="/icf-minor.pdf" role="button" target="_blank">Open Informed Consent Form</a>
                <p class="fs-5 text-muted mb-5" style="margin-top: 48px;"><span style="color: rgb(0, 32, 92);">Once you and your parent have filled in the form and have signed (physically or digitally), please scan/save and&nbsp;</span><strong><span style="color: rgb(0, 32, 92);">upload</span></strong><span style="color: rgb(0, 32, 92);"> your Informed Consent Form through this file upload button. Rest assured that your files are treated with utmost care and are stored in a </span><strong><span style="color: rgb(0, 32, 92);">secure</span></strong><span style="color: rgb(0, 32, 92);"> environment.</span></p>
                <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" id="consent2" onSubmit="return false;"  data-bs-theme="light">
                    <div class="vstack gap-3">
                        <div class="my-2"><input class="form-control" id="icffile" type="file" accept="application/pdf" required=""></div>
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">I have uploaded a signed form</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

const adult2 = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Consent for Adults</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">As you have given consent for your participation in this study, we will need you to </span><strong><span style="color: rgb(0, 32, 92);">fill</span></strong><span style="color: rgb(0, 32, 92);"> in the Informed Consent Form and </span><strong><span style="color: rgb(0, 32, 92);">sign</span></strong><span style="color: rgb(0, 32, 92);"> it.</span></p><a class="btn btn-primary" href="/icf-adult.pdf" role="button" target="_blank">Open Informed Consent Form</a>
                <p class="fs-5 text-muted mb-5" style="margin-top: 48px;"><span style="color: rgb(0, 32, 92);">Once you have filled in the form and have signed (physically or digitally), please scan/save and&nbsp;</span><strong><span style="color: rgb(0, 32, 92);">upload</span></strong><span style="color: rgb(0, 32, 92);"> your Informed Consent Form through this file upload button. Rest assured that your files are treated with utmost care and are stored in a </span><strong><span style="color: rgb(0, 32, 92);">secure</span></strong><span style="color: rgb(0, 32, 92);"> environment.</span></p>
                <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" id="consent2" onSubmit="return false;"  data-bs-theme="light">
                    <div class="vstack gap-3">
                        <div class="my-2"><input class="form-control" id="icffile" type="file" accept="application/pdf" required=""></div>
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">I have uploaded a signed form</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

export { landing, precollect, minor1, adult1, minor2, adult2 }