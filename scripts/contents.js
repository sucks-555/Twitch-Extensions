if (location.host === "www.twitch.tv") {
  (async function() {
     while (true) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      const sunege = document.querySelector('[aria-label="ボーナスを受け取る"]');
      if (sunege && window.getComputedStyle(sunege).display !== 'none') {
        sunege.click();
      }
    }
  })();
}

if (location.host === "www.twitch.tv") {
  const muteStamp = '[alt="BloodTrail"] , [alt="BigPhish"] , [alt=DinoDance]';
  const muteuser = '[data-a-user="haruharu04170417"]'
  const loop = () => {
    const chat = document.querySelector('[aria-label="チャットメッセージ"]');
    const del_user = chat.querySelectorAll(muteuser);
    const del_stamps = chat.querySelectorAll(muteStamp);
    del_user.forEach(user => {
      user.remove()
    });
    del_stamps.forEach(stamp => {
      stamp.parentElement.parentElement.parentElement.parentElement.remove();
    });
  };
  setInterval(loop, 500);
}

if (location.host === "www.twitch.tv") {
  let retryCount = 0;
  const maxRetryCount = 10;
  function Add_PictureInPicture_with_twitch() {
    const video_tag = document.querySelector('.InjectLayout-sc-1i43xsx-0 video');
    function toggle() {document.pictureInPictureElement ? document.exitPictureInPicture() : video_tag.requestPictureInPicture();}
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
        setTimeout(Add_PictureInPicture_with_twitch, 500);
      }
    } else if (retryCount < maxRetryCount) {
      retryCount++;
      setTimeout(Add_PictureInPicture_with_twitch, 500);
    }
  }
  Add_PictureInPicture_with_twitch();
}
