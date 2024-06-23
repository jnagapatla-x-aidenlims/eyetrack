import * as gaze from "/assets/js/data/gaze.js";

function prepare (data) {
    const jsoned = JSON.stringify(data);
    const file = new File([jsoned], "eyedata.eyedata", {type: "application/json"});
    return file
}

export { gaze, prepare }