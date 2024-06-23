var image, feeling, nature, strength, videogames, movies, robots, ai, dolls, exposure, comfort, gazedata, coord, aimg;

async function start() {
    aimg = {}
    
    await webgazer.setRegression('ridge').saveDataAcrossSessions(true).begin();
    webgazer.showVideoPreview(false).showPredictionPoints(false).applyKalmanFilter(true);

    webgazer.pause();

    for (let i = 0; i < 15; i++) {
        // Remove interface; present cross
        $('#fullpage').attr("hidden", "");
        $('#study').removeAttr("hidden");

        // Update image and noise pattern
        image = data.gaze.getImg();
        $('#study').attr("style", `background-image: url('${image.noise}'); background-position: center; background-repeat: no-repeat; background-size: cover; height: 100vh`);
        $('#face').attr("src", image.source)

        // Show cross for 1 second
        await sleep(1000);

        // Remove cross; present face
        $('#cross').attr("hidden", "");
        $('#face').removeAttr("hidden");

        // Show face for 1.5 seconds
        gazedata = await collect();

        // Remove face; present noise
        $('#black').attr("hidden", "");

        // Show noise for 1 second
        await sleep(1000);

        // Remove noise; present interface
        $('#study').attr("hidden", "");
        int.maincontent(int.study.postcycle);
        $('#fullpage').removeAttr("hidden");

        // Present interface until submission
        await new Promise(function(resolve) {$('#postcyclebutton').on("submit", resolve);});
        
        // Get participant opinions
        feeling = $('#postcyclefeels').val();
        nature = $('#postcyclenature').val();
        strength = $('#postcyclestrength').val();

        $("#postcyclebutton")[0].reset();

        $('#face').attr("hidden");
        $('#black').removeAttr("hidden", "");
        $('#cross').removeAttr("hidden", "");

        aimg[image.name] = {gaze: gazedata, feeling: feeling, nature: nature, strength: strength};
    }

    webgazer.end();
    webgazer.stopVideo();

    int.maincontent(int.study.poststudy);
    await new Promise(function(resolve) {$('#poststudybutton').on("submit", resolve);});
    videogames = $('#videogames')[0].checked;
    movies = $('#cgimovies')[0].checked;
    robots = $('#humanoid')[0].checked;
    ai = $('#generai')[0].checked;
    dolls = $('#dolls')[0].checked;
    exposure = $('#exposures').val();
    comfort = $('#comfort').val();
    
    aimg.final = {videogames: videogames, movies: movies, robots: robots, ai: ai, dolls: dolls, exposure: exposure, comfort: comfort};
    
    return aimg;
}

async function collect () {
    var simg = []
    webgazer.resume()

    var startTime, endTime;

    for (var i = 0; i < 30; i++) {
        startTime = performance.now()
        coord = await webgazer.getCurrentPrediction();
        simg.push({x: coord.x, y: coord.y})
        endTime = performance.now()
        await sleep(50 - (endTime - startTime));
    }

    webgazer.pause();
    return simg;
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export { start }