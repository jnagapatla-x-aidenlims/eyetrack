const transmission = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Transmission of Data</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">The study has been conducted and we thank you sincerely for your participation!&nbsp;We will now proceed to transmit the data collected to our secure storage systems. If you authorise for the data to be transmitted, please click on the button below.</span><br><br><span style="color: rgb(0, 32, 92);">Transmission consists of:</span><br><span style="color: rgb(0, 32, 92);">The coordinates of the screen where your eyes' gaze landed on</span><br><span style="color: rgb(0, 32, 92);">Your responses to the post-cycle and post-study questionnaires</span><br><br><span style="color: rgb(0, 32, 92);">Transmission does NOT consist of:</span><br><span style="color: rgb(0, 32, 92);">Video data</span><br><span style="color: rgb(0, 32, 92);">Personally-identifiable data&nbsp;</span></p>
                <div class="vstack gap-3">
                    <div class="my-2"><button class="btn btn-primary shadow ms-2" id="transmitbutton" type="submit">Transmit the data securely</button></div>
                </div>
            </div>
        </div>
    </div>
</div>`

const end = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Thank you!</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">Thank you very much for your participation in our study! We will be analysing the coordinates of your eyes&#39; gaze to determine your emotional resonance when presented with artificial vs. real human face images.</span><br /><br /><span style="color: rgb(0, 32, 92);">Rest assured that your data has been anonymised and is stored safely. If you have any remaining doubts, please feel free to send us an e-mail message! Have a nice day!</span></p>
                <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" method="post" data-bs-theme="light">
                    <div class="vstack gap-3">
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" id="logoutbutton" type="submit">Sign out of the portal</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

export { transmission, end }