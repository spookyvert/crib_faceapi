let facemesh;
let predictions = [];
let video;


function setup() {
  console.log(123);
  createCanvas(windowWidth, windowHeight,);

  video = createCapture(VIDEO);
  facemesh = ml5.facemesh(video,  () => {
    console.log("Model ready!");
  });

  facemesh.on("predict", results => {
    predictions = results;
  });

  video.hide();
}

function draw() {
  background(0);
  drawKeypoints();
}

const drawKeypoints = () => {
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;

    // Draw facial keypoints.
    for (let j = 0; j < keypoints.length; j += 1) {
      const [x, y] = keypoints[j];

      fill(255);
      ellipse(x, y,3, 3);
    }
  }
}
