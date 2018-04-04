var animationParams = {
  container: document.getElementById('loading_box'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
};

var animation = bodymovin.loadAnimation(animationParams);
animation.setSpeed(1.5);