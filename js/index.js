'use strict';

import {
  radioPlayerInit
} from './radioPlayer.js';

import {
  audioPlayerInit
} from './audioPlayer.js';

import {
  videoPlayerInit
} from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach((item) => {
    item.classList.remove('active');
  });
  playerBlock.forEach((item) => {
    item.classList.remove('active');
  });
};

playerBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    deactivationPlayer();
    item.classList.add('active');
    playerBlock[index].classList.add('active');
  });
});

radioPlayerInit();
audioPlayerInit();
videoPlayerInit();