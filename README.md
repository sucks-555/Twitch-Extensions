```js
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
  const muteStamp = '[alt="BloodTrail"], [alt="BigPhish"], [alt="DinoDance"]';
  const muteuser = '[data-a-user="haruharu04170417"]';
  const loop = () => {
    const chat = document.querySelector('[aria-label="チャットメッセージ"]');
    chat && chat.querySelectorAll(muteStamp).forEach(stamp => {
      stamp.closest('[data-test-selector="emote-button"]').remove();
    });
    chat && chat.querySelectorAll(muteuser).forEach(user => {
      user.closest('[data-a-target="chat-line-message"]').remove();
    });
  };
  setInterval(loop, 500);
}

```
