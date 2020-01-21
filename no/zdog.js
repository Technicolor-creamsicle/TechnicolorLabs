// zdog-demo.js
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  // enable rotating scene with dragging
  dragRotate: true,
});
// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  translate: { z: 40 },
  color: '#666',
});
// square
new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  // position further back
  translate: { z: -40 },
  stroke: 12,
  color: '#E62',
  fill: true,
});
// update & render
illo.updateRenderGraph();

function animate() {
  // rotate illo each frame
  
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();
