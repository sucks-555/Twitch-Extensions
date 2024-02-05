```js
if (location.host === "www.twitch.tv") { // 自動すね毛回収
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
  const muteStamp = '[alt="BloodTrail"] , [alt="BigPhish"] , [alt=DinoDance]'; // ミュート絵文字
  const muteuser = '[data-a-user="haruharu04170417"]' // ミュートユーザー
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
```
