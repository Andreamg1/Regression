
async function runExample() {

var x = new float32Array(1,11)
  document.getElementById('box1').value;
  document.getElementById('box2').value;
  document.getElementById('box3').value;
  document.getElementById('box4').value;
  document.getElementById('box5').value;
  document.getElementById('box6').value;
  document.getElementById('box7').value;
  document.getElementById('box8').value;
  document.getElementById('box9').value;
  document.getElementById('box10').value;
  document.getElementById('box11').value;

  let tensorX = newonnx.Tensor(x,'float32',[1,11]);

  let session = newonnx.InferenceSession();

  await session.loadModel("./DLNet_WineData.onnx");
  
  let outputMap = await session.run([tensorX]);
  let outputData = outputMap.get('output1');

  let predictions = document.getElementById('predictions');
  
}
