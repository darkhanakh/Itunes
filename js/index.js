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

playerBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    console.log('a');
  });
});