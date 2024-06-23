import * as pre from "/assets/js/interface/prestudy.js";
import * as study from "/assets/js/interface/study.js";
import * as post from "/assets/js/interface/poststudy.js";

const maincontent = (template) => $("#maincontent").html(template);

const navbar = (choice) => $("#navbarbutton").html(
    choice === "register" ? `<a class="btn btn-primary shadow" role="button" href="https://forms.gle/dei662ihZNfiUraz6" rel="external">Register as a Participant</a>` : 
    `<button class="btn btn-primary shadow" id="withdrawalbutton" type="button">Withdraw from Study</button>`);

export { maincontent, navbar, pre, study, post }