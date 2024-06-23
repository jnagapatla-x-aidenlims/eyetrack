var image, attractiveness, realism, justification, nature, videogames, movies, robots, ai, dolls, exposure, comfort, gazedata, coord, aimg, x, width;

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

        x = document.getElementById("face").getBoundingClientRect().x;
        width = document.getElementById("face").getBoundingClientRect().width;

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
        $('#pchead').html(`Response on Image #${i+1} of 15`);
        
        // Get participant opinions
        attractiveness = $('#postcycleattractiveness').val();
        realism = $('#postcyclerealism').val();
        justification = $('#postcyclejustification').val();
        nature = $('#postcyclenature').val();

        $("#postcyclebutton")[0].reset();

        $('#face').attr("hidden");
        $('#black').removeAttr("hidden", "");
        $('#cross').removeAttr("hidden", "");

        aimg[image.name] = {gaze: gazedata, attractiveness: attractiveness, realism: realism, justification: justification, nature: nature, x: x, width: width};
    }

    webgazer.end();
    webgazer.stopVideo();

    int.maincontent(int.study.poststudy);
    await new Promise(function(resolve) {$('#poststudybutton').on("submit", resolve);});
    videogames = $('#videogames').val();
    movies = $('#cgimovies').val();
    robots = $('#humanoid').val();
    ai = $('#generai').val();
    dolls = $('#dolls').val();
    exposure = $('#exposures').val();
    comfort = $('#comfort').val();
    
    aimg.final = {schema: "junever", videogames: videogames, movies: movies, robots: robots, ai: ai, dolls: dolls, exposure: exposure, comfort: comfort};
    
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