noseX = 0;
noseY = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(400,300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
canvas.center();

}

function draw() {
    image(video,0,0,400,300);
}

function take_snapshot() {
    save("clown-filter-sample.jpg")
}
