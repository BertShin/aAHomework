document.addEventListener("DOMContentLoaded", function(){
  const canvasElement = document.getElementById('mycanvas');
  canvasElement.width = 500;
  canvasElement.height = 500;

  const ctx = canvasElement.getContext("2d");

  ctx.fillStyle = "red";
  ctx.fillRect = (0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(100, 200, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();

});
