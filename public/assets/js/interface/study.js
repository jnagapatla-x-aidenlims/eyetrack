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
                        <div class="input-group"><span class="input-group-text">Attractiveness of Image</span><select id="postcycleattractiveness" class="form-select" required="">
                            <option value=""></option>
                            <option value="2">The displayed image is attractive and reassuring (handsome / beautiful)</option>
                            <option value="1">The displayed image is neutral</option>
                            <option value="0">The displayed image is unattractive and off-putting (ugly)</option>
                        </select></div>
                        <div class="input-group"><span class="input-group-text">Realism of Image</span><select id="postcyclerealism" class="form-select" required="">
                            <option value=""></option>
                            <option value="2">The displayed image appears to be real</option>
                            <option value="1">The displayed image is possibly real</option>
                            <option value="0">The displayed image is not real at all</option>
                        </select></div>
                        <div class="input-group"><span class="input-group-text">Justification</span><input class="form-control" id="postcyclejustification" type="text" placeholder="Why do you think so; is there anything peculiar about it?" required=""></div>
                        <div class="input-group"><span class="input-group-text">Nature of Overall Feeling</span><select id="postcyclenature" class="form-select" required="">
                            <option value=""></option>
                            <option value="2">I find the image warm and positive</option>
                            <option value="1">I do not feel much of anything</option>
                            <option value="o">The image is cold and makes me feel negative</option>
                        </select></div>
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
                        <div class="input-group"><span class="input-group-text">Videogames</span><select id="videogames" class="form-select" required="">
                            <option value=""></option>
                            <option value="3">I play videogames very often</option>
                            <option value="2">I play videogames sometimes</option>
                            <option value="1">I play videogames rarely</option>
                            <option value="0">I never play videogames</option>
                        </select></div>
                        <div class="input-group"><span class="input-group-text">Movies with CGI</span><select id="cgimovies" class="form-select" required="">
                            <option value=""></option>
                            <option value="3">I watch CGI movies very often</option>
                            <option value="2">I watch CGI movies sometimes</option>
                            <option value="1">I watch CGI movies rarely</option>
                            <option value="0">I never watch CGI movies</option>
                        </select></div>
                        <div class="input-group"><span class="input-group-text">Humanoids</span><select id="humanoid" class="form-select" required="">
                            <option value=""></option>
                            <option value="3">I interact with humanoid robots very often</option>
                            <option value="2">I interact with humanoid robots sometimes</option>
                            <option value="1">I interact with humanoid robots rarely</option>
                            <option value="0">I never interact with humanoid robots</option>
                        </select></div>
                        <div class="input-group"><span class="input-group-text">Generative AI</span><select id="generai" class="form-select" required="">
                            <option value=""></option>
                            <option value="3">I use Generative AI tools to create images very often</option>
                            <option value="2">I use Generative AI tools to create images sometimes</option>
                            <option value="1">I use Generative AI tools to create images rarely</option>
                            <option value="0">I never use Generative AI tools to create images</option>
                        </select></div>
                        <div class="input-group"><span class="input-group-text">Dolls</span><select id="dolls" class="form-select" required="">
                            <option value=""></option>
                            <option value="3">I play with human dolls very often</option>
                            <option value="2">I play with human dolls sometimes</option>
                            <option value="1">I play with human dolls rarely</option>
                            <option value="0">I never play with human dolls</option>
                        </select></div>
                        <div class="input-group"><span class="input-group-text">Other Exposure</span><input class="form-control" id="exposures" type="text" placeholder="Other interactions you have with artificial humans" required=""></div>
                        <div class="input-group"><span class="input-group-text">Overall Comfort</span><select id="comfort" class="form-select" required="">
                            <option value=""></option>
                            <option value="2">I am very comfortable in interacting with artificial humans</option>
                            <option value="1">I am comfortable in interacting with artificial humans</option>
                            <option value="0">I am neutral in interacting with artificial humans</option>
                            <option value="-1">I am uncomfortable in interacting with artificial humans</option>
                            <option value="-2">I am very uncomfortable in interacting with artificial humans</option>
                        </select></div>
                        <div class="my-2"><button class="btn btn-primary shadow ms-2" type="submit">Complete participation in this study</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`

export { thanks, redo, wellcalib, postcycle, poststudy }