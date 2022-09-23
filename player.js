let videos = ['10.1-s07-fullbody-still.mov.webm','11.1-s07-7d-fullbody-side-still.mov.webm','11.1-S09-above-still-bitoutofframe-full.mov.webm','11.2-S09-above-still-bitoutofframe.mov.webm','1.1-S02-far-still.mov.webm','1.1-s05-still-torso-arms-front.mov.webm','1.1-s05-still-torso-front.mov.webm','1.1-s06-above-still.mov.webm','1.1-s07-fullbody-stativ.mov.webm','1.1-S10-fullbody-stativ.mov.webm','12.1-s07-fullbody-follow.mov.webm','12.1-S09-above-still-full.mov.webm','12.2-S09-slomo-above-still.mov.webm','1.2-S02-far-zoom.mov.webm','1.2-S08-front-still-wall.mov.webm','1.3-s06-above-still-long.mov.webm','1.3-s07-fullbody-stativ.mov.webm','14.1-S09-front-stativ-full.mov.webm','14.2-S09-front-stativ-part.mov.webm','14.3-S09-front-stativ-part2.mov.webm','1.4-s03-torso-front.mov.webm','1.4-s07-fullbody-stativ-FULL.mov.webm','15.1-S09-front-stativ-full.mov.webm','2.1-s03-close-face-front.mov.webm','2.1-s06-above-still-full.mov.webm','2.1-S10-fullbody-stativ.mov.webm','2.2-S01-above-still.mov.webm','2.2-S02-far-zoom.mov.webm','2.2-s03-close-face-front.mov.webm','2.2-s05-still-torso-front.mov.webm','2.2-s06-above-still.mov.webm','2.2-s07-close-stativ.mov.webm','2.3-S02-far-zoom.mov.webm','2.3-s05-still-torso-front.mov.webm','2.3-S08-front-still-sideofframe-macaco.mov.webm','3.1-s06-torso-still-wall.mov.webm','3.1-S09-above-still-full.mov.webm','3.1-S10-fullbody-stativ.mov.webm','3.2-S08-front-still-macaco.mov.webm','3.3-s05-still-torso-front.mov.webm','4.1-S02-medium-freehand-full.mov.webm','4.1-s06-fullbody-corner.mov.webm','4.2-s03-fullbody-side-floor.mov.webm','4.2-s04-torso-front.mov.webm','4.3-S01-front-torso-still.mov.webm','4.3-s05-above-greentrousers.mov.webm','4.4-S01-front-torso-still.mov.webm','4.4-s03-halfbody-front-freehand.mov.webm','5.1-s04-fullbody-center-front.mov.webm','5.1-s05-above-corner-shorts.mov.webm','5.1-S09-above-still-full.mov.webm','5.2-S02-medium-still-openhair.mov.webm','5.2-s04-fullbody-center-front.mov.webm','5.2-s07-close-stativ.mov.webm','5.4-S01-front-torso-hair-still.mov.webm','6.1-s03-halfbody-front-still.mov.webm','6.1-s06-fullbody-center-freehand.mov.webm','6.1-s07-fullbody-still.mov.webm','6.1-S08-front-stativ-full.mov.webm','6.2-S01-closeside-head-still.mov.webm','6.4-s04-fullbody-floor-front.mov.webm','6.4-s05-above-center-shorts-full.mov.webm','6.5-s04-fullbody-floor-front.mov.webm','7.1-S01-closeside-head-still.mov.webm','7.1-s05-above-greentrousers.mov.webm','7.1-s06-fullbody-center-still.mov.webm','7.1-s07-fullbody-still.mov.webm','7.1-S09-front-still.mov.webm','7.2-S02-close-side-head-ponytail.mov.webm','7.2-s07-fullbody-still.mov.webm','7.2-S09-front-still.mov.webm','7.3-s07-fullbody-almostfull-still.mov.webm','7.3-S09-front-still.mov.webm','7.4-s07-fullbody-almostfull-still.mov.webm','7.4-S10-fullbody-still-corner.mov.webm','8.1-S01-close-hairopenl.mov.webm','8.1-S02-close-front-head-ponytail.mov.webm','8.1-s07-fullbody-still-full.mov.webm','8.2-s07-fullbody-still.mov.webm','8.2-S09-front-still-part.mov.webm','9.1-s06-halfbody-corner-freehand.mov.webm','9.1-s07-fullbody-still.mov.webm','9.1-S08-front-stativ-full.mov.webm','9.1-S09-above-still-full.mov.webm','9.1-S10-fullbody-still-center.mov.webm','9.2-s07-fullbody-still.mov.webm','9.2-S10-fullbody-still-center.mov.webm','caminhando4.mov.webm','corpomovimento.mov.webm','correndo1.mov.webm','correndo2.mov.webm','correndo3.mov.webm','correndo4.mov.webm','correndo5.mov.webm','correndocostas1.mov.webm','MACACO.mov.webm','SLO10.mov.webm','SLO11.mov.webm','SLO12.mov.webm','SLO13.mov.webm','SLO14.mov.webm','SLO1.mov.webm','SLO2.mov.webm','SLO3.mov.webm','SLO4.mov.webm','SLO5.mov.webm','SLO6.mov.webm','SLO7.mov.webm','SLO8.mov.webm','SLO9.mov.webm','torso-face.mov.webm']


let choose = function (array) { 
    return array[Math.floor(Math.random() * array.length)]
}

let video1 = document.getElementById('video1');
video1.src = 'webm/vp8/' + choose(videos);
let video2 = document.getElementById('video2');
video2.src = 'webm/vp8/' + choose(videos);

let canvas = document.getElementById("canvas")
let canvasctx = canvas.getContext("2d")
let audio = document.getElementById("audio")
audio.currentTime = parseInt(Math.random() * (30 * 60))

let play = document.getElementById("play")

play.onclick = function () {
    play.style.display = 'none';
    audio.play();
    video.play();
}

let video = video1;
let changeVideos = function () {
    if (video == video1) {
        video = video2;
        video1.src = "webm/vp8/" + choose(videos);
    } else {
        video = video1;
        video2.src = "webm/vp8/" + choose(videos);
    }
    video.play();
}

video1.addEventListener('ended',changeVideos,false);
video2.addEventListener('ended',changeVideos,false);
let refresh = function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvasctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    setTimeout(refresh, 0 )
}

refresh();
