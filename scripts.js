const selectors = {
  buttons: '[data-youtube-id]',
  videoWrapper: '.video-wrapper',
}

const swapVideo = button => {
  const videoId = button.getAttribute('data-youtube-id');
  const videoWrapper = button.closest(selectors.videoWrapper);
  const iframe = videoWrapper.querySelector('iframe');

  iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
}

const handleClick = event =>  {
  const target = event.target;
  const button = target.closest(selectors.buttons);

  if (!button) return;

  swapVideo(button);
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', handleClick);
});