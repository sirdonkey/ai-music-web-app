song1 = "";
song2 = "";
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
    song1 = loadSound("Punch.mp3");
    song2 = loadSound("Rise of the Triad.ogg");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}