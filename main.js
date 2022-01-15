noseX=0;
noseY=0;

difference=0;

rightWristX=0;

leftWristX=0;



function setup()
{
video = createCapture(VIDEO);
video.size(400, 400);
video.position(300,150);

canvas=createCanvas(400, 400);
canvas.position(800,150);

posenet=ml5.poseNet(video, modelLoaded);
posenet.on("pose",gotPoses);
}

function gotPoses(results)
{
if (results.length > 0 ) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x = "+noseX+", nose y = "+noseY);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX = "+leftWristX+", rightWristX = "+rightWristX+", difference = "+difference);

}    
}

function modelLoaded()
{
    console.log("model is loaded");
}

function draw()
{
    background("#808080");
    fill("#00ffc8");
    stroke("#00ffc8");
square(noseX, noseY, difference);
}