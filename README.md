# animate-lottiefiles

Simple but awesome animation using [LottieFiles](https://www.lottiefiles.com/)

## How to use it?

```
var animationParams = {
  container: document.getElementById('loading_box'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
};
```

You can call `bodymovin.loadAnimation(animationParams)` to start an animation. It takes an object as a unique param with:

- animationData: an Object with the exported animation data.
- path: the relative path to the animation object. (animationData and path are mutually exclusive)
- loop: true / false / number
- autoplay: true / false it will start playing as soon as it is ready
- name: animation name for future reference
- renderer: 'svg' / 'canvas' / 'html' to set the renderer
- container: the dom element on which to render the animation

## Screen
