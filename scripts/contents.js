if (location.host === "www.twitch.tv") {
  let retryCount = 0;
  const maxRetryCount = 5;

  function skipTwitchAds() {
    const adOverlay = document.querySelector('.video-player__overlay');
    if (adOverlay) {
      const skipButton = adOverlay.querySelector('.player-ad-message__skip-button');
      if (skipButton) {
        skipButton.click();
      }
    }
  }
  function Add_PictureInPicture_with_twitch() {
    const video_tag = document.querySelector('.InjectLayout-sc-1i43xsx-0 video');
    function toggle() {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
      } else {
        video_tag.requestPictureInPicture();
      }
    }
    if (video_tag) {
      const buttonSpace = document.querySelector('.player-controls__right-control-group');
      if (buttonSpace) {
        const createButton = document.createElement('button');
        createButton.innerHTML = 'PiP';
        createButton.style.cssText = `color: white;border-radius: 100vh;border: 1px white solid;padding: 2px 6px;margin: 0px 5px;`;
        createButton.addEventListener('click', toggle);
        buttonSpace.appendChild(createButton);
      } else if (retryCount < maxRetryCount) {
        retryCount++;
        setTimeout(Add_PictureInPicture_with_twitch, 1000);
      }
    } else if (retryCount < maxRetryCount) {
      retryCount++;
      setTimeout(Add_PictureInPicture_with_twitch, 1000);
    }
  }
  Add_PictureInPicture_with_twitch();
  setInterval(skipTwitchAds, 1000);
}
