const thanks = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Consent Received</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">Thank you for uploading your Informed Consent Form. We will proceed to calibration of the study. You may withdraw from the study at any time with no consequences by clicking on the withdrawal button that appears at most stages of the study.</span><br /><br /><span style="color: rgb(0, 32, 92);">Read the following instructions:</span><br /><span style="color: rgb(0, 32, 92);">1. Sit on a stationary chair in a well-lit room</span><br /><span style="color: rgb(0, 32, 92);">2. Ensure your webcam is at eye-level</span><br /><span style="color: rgb(0, 32, 92);">3. Allow the browser access to your camera</span><br /><span style="color: rgb(0, 32, 92);">4. Make the black box in the video green by moving your head</span><br /><span style="color: rgb(0, 32, 92);">5. Strongly focus your eyes on a dot</span><br /><span style="color: rgb(0, 32, 92);">6. Press the dot at 1-second intervals until it turns yellow</span><br /><span style="color: rgb(0, 32, 92);">7. Repeat for all 8 dots and for the dot that appears later</span><br /><span style="color: rgb(0, 32, 92);">8. Acknowledge the informational dialog box</span><br /><span style="color: rgb(0, 32, 92);">9. Focus on the central dot for 5 seconds</span></p><a class="btn btn-primary" id="thanksproceed" role="button" target="_blank">I am ready to proceed</a>
            </div>
        </div>
    </div>
</div>`

const redo = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Poor Calibration</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">Dear participant, we are sorry to inform you that your camera is poorly calibrated. To ensure proper data collection, do re-read the instructions and try again. Avoid moving your head and clicking the buttons too quickly. Thank you!</span><br /><br /><span style="color: rgb(0, 32, 92);">Read the following instructions:</span><br /><span style="color: rgb(0, 32, 92);">1. Sit on a stationary chair in a well-lit room</span><br /><span style="color: rgb(0, 32, 92);">2. Ensure your webcam is at eye-level</span><br /><span style="color: rgb(0, 32, 92);">3. Allow the browser access to your camera</span><br /><span style="color: rgb(0, 32, 92);">4. Make the black box in the video green by moving your head</span><br /><span style="color: rgb(0, 32, 92);">5. Strongly focus your eyes on a dot</span><br /><span style="color: rgb(0, 32, 92);">6. Press the dot at 1-second intervals until it turns yellow</span><br /><span style="color: rgb(0, 32, 92);">7. Repeat for all 8 dots and for the dot that appears later</span><br /><span style="color: rgb(0, 32, 92);">8. Acknowledge the informational dialog box</span><br /><span style="color: rgb(0, 32, 92);">9. Focus on the central dot for 5 seconds</span></p><a class="btn btn-primary" id="thanksproceed" role="button" target="_blank">I am ready to proceed</a>
            </div>
        </div>
    </div>
</div>`

const wellcalib = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Great Calibration!</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">Thank you for performing calibration! This helps us in assurance of data quality for analysis of your emotional resonance.</span><br /><br /><span style="color: rgb(0, 32, 92);">If you are ready, we can start collecting data for the main study:</span><br /><span style="color: rgb(0, 32, 92);">1. Sit on a stationary chair in a well-lit room</span><br /><span style="color: rgb(0, 32, 92);">2. Ensure that there are no distractions in the room</span><br /><span style="color: rgb(0, 32, 92);">3. Ensure your webcam is at eye-level</span><br /><span style="color: rgb(0, 32, 92);">4. Relax your mind and temporarily forget your worries</span><br /><span style="color: rgb(0, 32, 92);">5. Look at the cross to concentrate your attention</span><br /><span style="color: rgb(0, 32, 92);">6. Do not move your head when you see the human faces</span><br /><span style="color: rgb(0, 32, 92);">7. When the noise screen disappears, answer the questions</span><br /><span style="color: rgb(0, 32, 92);">8. Repeat steps 4-5 for each image displayed to you</span><br /><span style="color: rgb(0, 32, 92);">The main portion of the study should take ten minutes at most</span></p><a class="btn btn-primary" id="thanksproceed" role="button" target="_blank">I am ready to proceed</a>
            </div>
        </div>
    </div>
</div>`

const postcycle = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Response on Image</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">You were shown an image of an artificially-generated or a real human face in the previous page. Please enter the </span><span style="text-decoration: underline; color: rgb(0, 32, 92);">feeling that this face elicited in you</span><span style="color: rgb(0, 32, 92);">.</span></p>
                <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" id="postcyclebutton" onSubmit="return false;" data-bs-theme="light">
                    <div class="vstack gap-3">
                        <div class="input-group"><span class="input-group-text">Feeling</span><input class="form-control" id="postcyclefeels" type="text" placeholder="e.g. joy, sadness, confusion, shock, etc." required=""></div>
                        <div class="input-group"><span class="input-group-text">Nature of Feeling</span><select id="postcyclenature" class="form-select" required="">
                            <option value=""></option>
                            <option value="Positive">Positive</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Negative">Negative</option>
                        </select></div>
                        <div class="input-group"><span class="input-group-text">Strength of Feeling</span><input class="form-control" id="postcyclestrength" type="number" placeholder="Ranging from 0-10" step="0.1" min="0" max="10" required=""></div>
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">Proceed to the next stage</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

const poststudy = `
<div class="container py-5">
    <div class="row pt-5">
        <div class="col-md-8 col-xxl-6 text-center text-md-start mx-auto">
            <div class="text-center">
                <h1 class="display-4 fw-bold mb-5" style="color: #00205c;">Questionnaire</h1>
                <p class="fs-5 text-muted mb-5"><span style="color: rgb(0, 32, 92);">You were shown many images of artificially-generated and real human faces in the previous pages. Please answer the following post-study questionnaire before completing your participation.</span></p>
                <form class="d-flex justify-content-center flex-wrap flex-lg-nowrap" id="poststudybutton" onSubmit="return false;" data-bs-theme="light">
                    <div class="vstack gap-3">
                        <fieldset>
                            <div class="form-check text-start"><input class="form-check-input" type="checkbox" id="videogames"><label class="form-check-label" for="formCheck-1">Do you play videogames featuring photorealistic animated characters</label></div>
                            <div class="form-check text-start"><input class="form-check-input" type="checkbox" id="cgimovies"><label class="form-check-label" for="formCheck-2">Do you watch many Computer Generated Imagery (CGI) movies</label></div>
                            <div class="form-check text-start"><input class="form-check-input" type="checkbox" id="humanoid"><label class="form-check-label" for="formCheck-3">Do you interact with humanoid robots on a frequent basis</label></div>
                            <div class="form-check text-start"><input class="form-check-input" type="checkbox" id="generai"><label class="form-check-label" for="formCheck-4">Do you often use Generative AI tools to create images of human faces</label></div>
                            <div class="form-check text-start"><input class="form-check-input" type="checkbox" id="dolls"><label class="form-check-label" for="formCheck-5">Do you frequently play with toy human dolls</label></div>
                        </fieldset>
                        <div class="input-group"><span class="input-group-text">Other Exposure</span><input class="form-control" id="exposures" type="text" placeholder="Other interactions you have with artificial humans" required=""></div>
                        <div class="input-group"><span class="input-group-text">Comfort</span><select id="comfort" class="form-select" required="">
                            <option value=""></option>
                            <option value="Best">I am very comfortable in interacting with artificial humans</option>
                            <option value="Good">I am comfortable in interacting with artificial humans</option>
                            <option value="None">I am neutral in interacting with artificial humans</option>
                            <option value="Poor">I am uncomfortable in interacting with artificial humans</option>
                            <option value="Worst">I am very uncomfortable in interacting with artificial humans</option>
                        </select></div>
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">Complete participation in this study</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

export { thanks, redo, wellcalib, postcycle, poststudy }