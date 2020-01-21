function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();
