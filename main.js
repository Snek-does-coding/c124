function preload()
{


}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet = poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video,0,0,300,300);
}
function takeSnapshot()
{
    save('myFilter.png');
}
function modelLoaded()
{
    console.log('Posenet is ready');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Nose x ="+results[0].pose.nose.x)
        console.log("Nose y ="+results[0].pose.nose.y)
    }
}


