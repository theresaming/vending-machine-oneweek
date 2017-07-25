'use strict';

console.log("attaching slot machine!");

var images = {
    hershey: 'img/hershey.png',
    lolly: 'img/lolly.png'
};

(function ($) {
    resetReels();
    $('#playBtn').on('click', () => {
        // reset the reels
        resetReels();
       
        console.log("click!");
        let reels = $('.slot');
        console.log(reels);
        let nums = reels.map((index, reel) => $('li', $(reel)).length);
        // console.log(nums);
        let r = Math.random();
        let winners;
        if (r < 0.1) {
            // lose
            console.log("lose");
            winners = [1, 2, 2];
        } else if (r < 0.2) {
            // hershey
            console.log("big prize");
            winners = [5, 3, 3];
        } else {
            // lolly
            console.log("small prize");
            winners = [5, 1, 5];
        }
        winners = [1, 2, 1];

        $('.slot').each((index, reel) =>
            $(reel).jSlots({
                number: nums[index],
                winnerNumber: winners[index],
                spinner: '#playBtn2'
            })
        );
        $('#playBtn2').trigger('click')
    });
})(jQuery);

function resetReels() {
    $('.reels-container').empty();
    for (let i = 0; i < 3; i++) {
        $('.reels-container').append($('<div></div>').attr('class', 'jSlots-wrapper'));
    }
    $('.jSlots-wrapper').each((index, el) => {
        $(el).append($('<ul></ul>').attr('class', 'slot'));
    });
        
    $('.slot').each((index, slot) => {
        var numHershey = Math.floor(Math.random() * 3) + 1 // [1, 3]
        var numLolly = Math.floor(Math.random() * 5) + 2 // [2, 6]
        var imgs = [];
        for (let i = 0; i < numHershey; i++) {
            imgs.push(images.hershey);
        }
        for (let i = 0; i < numLolly; i++) {
            imgs.push(images.lolly);
        }
        _.shuffle(imgs);

        let reel = $(slot);
        imgs.forEach(v => {
            let li = $('<li></li>');
            li.append($('<img/>').attr('src', v));
            reel.append(li);
        });
    });
}

// var soundButtons = document.querySelectorAll('.button-sound');

// for (var i = 0; i < soundButtons.length; i++) {
//     var soundButton = soundButtons[i];
//     var soundName = soundButton.attributes['data-sound'].value;

//     prepareButton(soundButton, soundName);
// }

// function prepareButton(buttonEl, soundName) {
//     buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

//     var audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
//     buttonEl.addEventListener('click', function () {
//         audio.currentTime = 0;
//         audio.play();
//     });
// }

// const {ipcRenderer} = require('electron');

// var closeEl = document.querySelector('.close');
// closeEl.addEventListener('click', function () {
//     ipcRenderer.send('close-main-window');
// });

// ipcRenderer.on('global-shortcut', function (event, arg) {
//     var click = new MouseEvent('click');
//     soundButtons[arg].dispatchEvent(click);
// });

// var settingsEl = document.querySelector('.settings');
// settingsEl.addEventListener('click', function () {
//     ipcRenderer.send('open-settings-window');
// });
