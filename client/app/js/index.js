'use strict';

console.log("attaching slot machine!");

var images = {
    hershey: 'img/hershey.png',
    lolly: 'img/lolly.png'
};

// function getWinners(reelImgs, winners) {
//     return reelImgs.map((imgs, index) => {
//         let indices = imgs.map((img, idx) => {
//             return {
//                 img: img,
//                 index: idx
//             };
//         }).filter((obj) => obj.img === winners[index]).map((obj) => obj.index);
//         return Math.floor(Math.random() * indices.length) + 1;
//     });
// }

(function ($) {
    // resetReels();
    // $('#playBtn').on('click', () => {
    //     // reset the reels
    //     var reelImgs = resetReels();
    //     let reels = $('.slot');
    //     let nums = reels.map((index, reel) => $('li', $(reel)).length);
    //     // console.log(nums);
    //     let r = Math.random();
    //     let winners;
    //     let message;

    //     if (r < 0.1) {
    //         // lose
    //         message = "nothing";
    //         winners = getWinners(reelImgs, [images.hershey, images.hershey, images.lolly]);
    //     } else if (r < 0.2) {
    //         // hershey
    //         message = "big prize";
    //         winners = getWinners(reelImgs, [images.hershey, images.hershey, images.hershey]);
    //     } else {
    //         // lolly
    //         message = "small prize";
    //         winners = getWinners(reelImgs, [images.lolly, images.lolly, images.lolly]);
    //     }

    //     let promises = [];
    //     console.log($('.slot').length);
    //     $('.slot').each((index, reel) => {
    //         let prom = new Promise((res, rej) => {
    //             $(reel).jSlots({
    //                 number: nums[index],
    //                 winnerNumber: winners[index],
    //                 spinner: '#playBtn2',
    //                 onWin: function() {
    //                     res("done");
    //                 }
    //             });
    //         });
    //         promises.push(prom);
    //     });
    //     $('#playBtn2').trigger('click')

    //     Promise.race(promises).then((data) => {
    //         alert(message);
    //         console.log("done");
    //     });
    // });
    $('.slot').jSlots({
        number: 3,
        spinner: '#playBtn',
        onEnd: function (finalNums) {
            alert(finalNums);
        }
    });
})(jQuery);

// function resetReels() {
//     $('.reels-container').empty();
//     for (let i = 0; i < 3; i++) {
//         $('.reels-container').append($('<div></div>').attr('class', 'jSlots-wrapper'));
//     }
//     $('.jSlots-wrapper').each((index, el) => {
//         $(el).append($('<ul></ul>').attr('class', 'slot'));
//     });
        
//     var reelImgs = []
//     $('.slot').each((index, slot) => {
//         var numHershey = 2; //Math.floor(Math.random() * 3) + 1 // [1, 3]
//         var numLolly = 4; // Math.floor(Math.random() * 5) + 2 // [2, 6]
//         var imgs = [];
//         for (let i = 0; i < numHershey; i++) {
//             imgs.push(images.hershey);
//         }
//         for (let i = 0; i < numLolly; i++) {
//             imgs.push(images.lolly);
//         }
//         imgs = _.shuffle(imgs);
//         reelImgs.push(imgs);

//         let reel = $(slot);
//         imgs.forEach(v => {
//             let li = $('<li></li>');
//             li.append($('<img/>').attr('src', v));
//             reel.append(li);
//         });
//     });

//     return reelImgs;
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
