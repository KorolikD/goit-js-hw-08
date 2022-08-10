import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlaying, 1000));

function onPlaying(e) {
  JSON.stringify(localStorage.setItem('videoplayer-current-time', e.seconds));
}

let currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

if (currentTime) {
  player.setCurrentTime(currentTime);
}
