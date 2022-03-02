
RightwristX=0;
LeftwristX=0;
difference=0;

function setup()
{
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initalized...");
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);

    LeftwristX=results[0].pose.leftWrist.x;
    RightwristX=results[0].pose.rightWrist.x;
    difference=floor(LeftwristX - RightwristX);

    console.log("LeftwristX = "+LeftwristX + "RightwristX = "+RightwristX + "differnce = " + difference);
}
}

function draw()
{
    document.getElementById("font_size").innerHTML = "Font Size Of the Text Will Be - " + difference  + "PX";
    background('white'); 
    fill('black');
    textSize(difference);
    text('RAJAT',50,400);
}

