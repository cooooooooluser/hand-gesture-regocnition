noseX=0;
noseY=0;
difference=0;
leftwrist=0;
rightwrist=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(650, 600);
    canvas=createCanvas(650, 600)
    canvas.position(800, 100)
}