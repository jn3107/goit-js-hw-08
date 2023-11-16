import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const timeKey = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const videoPlayer = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(timeKey, JSON.stringify(seconds));
};

videoPlayer.on('timeupdate', throttle(getCurrentTime, 1000));

videoPlayer.setCurrentTime(JSON.parse(localStorage.getItem(timeKey)) || 0);