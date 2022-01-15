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

function modelLoaded()
{
    console.log("model is loaded");
}

function draw()
{
    background("#eda277");
    textSize(difference);
    fill("#000000");
    text('Shourya', 50, 400);
}

function gotPoses(results)
{
    if (results.length > 0 ) 
    {
        console.log(results);

        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("leftWristX = "+leftWrist+", rightWristX = "+rightWrist+", difference = "+difference);

}
}