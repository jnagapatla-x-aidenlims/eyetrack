var PointCalibrate;
var CalibrationPoints;

document.querySelectorAll('.Calibration').forEach((i) => {
    i.addEventListener('click', () => {
        calPointClick(i);
    })
})

async function start() {
    PointCalibrate = 0;
    CalibrationPoints = {};
    
    document.querySelectorAll('.Calibration').forEach((i) => {
        i.style.setProperty('background-color', 'red');
        i.style.setProperty('opacity', '0.2');
        i.style.removeProperty('display');
        i.removeAttribute('disabled');
    });

    await webgazer.setRegression('ridge').saveDataAcrossSessions(true).begin();
    webgazer.showVideoPreview(true).showPredictionPoints(true).applyKalmanFilter(true);

    var canvas = document.getElementById("plotting_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    document.getElementById('Pt5').style.setProperty('display', 'none');
}

function calculatePrecision(past50Array) {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    var x50 = past50Array[0];
    var y50 = past50Array[1];

    var staringPointX = windowWidth / 2;
    var staringPointY = windowHeight / 2;
  
    var precisionPercentages = new Array(50);
    calculatePrecisionPercentages(precisionPercentages, windowHeight, x50, y50, staringPointX, staringPointY);
    var precision = calculateAverage(precisionPercentages);

    return Math.round(precision);
};

function calculatePrecisionPercentages(precisionPercentages, windowHeight, x50, y50, staringPointX, staringPointY) {
    for (var x = 0; x < 50; x++) {
        var xDiff = staringPointX - x50[x];
        var yDiff = staringPointY - y50[x];
        var distance = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
        var halfWindowHeight = windowHeight / 2;
        var precision = 0;
        if (distance <= halfWindowHeight && distance > -1) {
            precision = 100 - (distance / halfWindowHeight * 100);
        } else if (distance > halfWindowHeight) {
            precision = 0;
        } else if (distance > -1) {
            precision = 100;
        }
        precisionPercentages[x] = precision;
    }
}

function calculateAverage(precisionPercentages) {
    var precision = 0;
    for (var x = 0; x < 50; x++) {
        precision += precisionPercentages[x];
    }
    precision = precision / 50;
    return precision;
}

async function calPointClick(node) {
    const id = node.id;
    if (!CalibrationPoints[id]){
        CalibrationPoints[id]=0;
    }
    CalibrationPoints[id]++;
    if (CalibrationPoints[id]==5){
        node.style.setProperty('background-color', 'yellow');
        node.setAttribute('disabled', 'disabled');
        PointCalibrate++;
    }else if (CalibrationPoints[id]<5){
        node.style.setProperty('opacity', 0.2*CalibrationPoints[id]+0.2);
    }
    if (PointCalibrate == 8){
        document.getElementById('Pt5').style.removeProperty('display');
    }
    if (PointCalibrate >= 9){
        document.querySelectorAll('.Calibration').forEach((i) => {
            i.style.setProperty('display', 'none');
        });
        document.getElementById('Pt5').style.removeProperty('display');
        var canvas = document.getElementById("plotting_canvas");
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        
        alert("Dear participant, thank you for calibrating your webcam! To ensure data we will collect in the study is accurate, we will be assessing this calibration.\nKeep your mouse stationary and stare at the middle dot for the next 5 seconds. This will allow us to calculate the accuracy of our predictions.");
        webgazer.params.storingPoints = true;
        await sleep(5000)
        webgazer.params.storingPoints = false;
        var past50 = webgazer.getStoredPoints();
        $('#calibrationcomplete').html(calculatePrecision(past50));
        document.getElementById('calibrationcomplete').click();
        webgazer.end();
        webgazer.stopVideo();
    }
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export { start }