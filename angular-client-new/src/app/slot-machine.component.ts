import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCaptionService } from './image-caption.service';
import * as jQuery from 'jquery';
// declare var jQuery: any;
// import 'assets/js/jquery.jSlots.js';

@Component({
	selector: 'slot-machine',
	templateUrl: './templates/slot-machine.component.html',
	styleUrls: ['css/slot-machine.component.css', 'css/screen.css']
})
export class SlotMachineComponent implements OnInit {
	// public showReward = false;
	// public winner = false;
	// public hershey = [1, 2, 4];
	// public lolly = [3, 5, 6];
	// public message = "";
	// public spinning = false;

	// public longTimer;
	// public shortTimer;

	constructor(
		private router: Router,
		private imageCaptionService: ImageCaptionService) {
	}

	// public test(){
	//     jQuery('h1').text('Magic');
	//     jQuery('.slot').jSlots({
	//         number: 3,
	//         spinner: '#playBtn',
	//         onEnd: function (finalNums) {
	//             alert(finalNums);
	//         }
	//     });
 	// }
	// public createMachine() {
	// 	const element = document.getElementById('machine');
	// 	const machine = new SlotMachine(element, { /* options */ });
	// 	const planeMachine = document.querySelector('machine');
		// new SlotMachine(planeMachine, {
		// 	active: 1,
		// 	delay: 450,
		// 	auto: 1500,
		// 	randomize() {
		// 		return this.nextIndex;
		// 	}
		// });
	}

	ngOnInit(): void {
		// this.createMachine();
		// this.longTimer = setTimeout(() => this.navigateToStart(), 20000);
		// var winOptions = {
		// 	winners: [
		// 		[2, 3, 5],
		// 		[5, 2, 3],
		// 		[3, 5, 5]
		// 	],
		// 	losers: [
		// 		[5, 7, 2],
		// 		[4, 2, 6],
		// 		[6, 7, 2]
		// 	]
		// };
		// var endNums;
		// var win;
		// if (false) {
		// 	endNums = winOptions.losers[Math.floor(Math.random() * winOptions.losers.length)];
		// 	console.log("lose", endNums);
		// 	win = false;
		// } else {
			// endNums = winOptions.winners[Math.floor(Math.random() * winOptions.winners.length)];
			// console.log("win", endNums);
			// win = true;
		// }
		// jQuery('.slot').jSlots({
	    //     number: 3,
	    //     spinner: '#playBtn',
	    //     endNums: endNums,
	    //     onStart: () => {
        // 		if (this.longTimer) {
        // 			clearTimeout(this.longTimer);
        // 		}
	    //     },
	    //     onEnd: finalNums => {
	    //     	this.showReward = true;
        // 		this.winner = true;
        // 		var timeout;
        // 		if (win) {
        // 			this.message = "You win! Grab your snack!";
        // 			this.imageCaptionService.sendVend();
        // 			timeout = 7000;
        // 		} else {
        // 			this.message = "Sorry, no snack this time!";
        // 			timeout = 3000;
        // 		}
        // 		this.spinning = true;
        // 		jQuery('#playBtn').attr('id', 'blah');
        // 		jQuery('.rewardarea').css('opacity', 1);
        // 		this.shortTimer = setTimeout(() => this.navigateToStart(), timeout);
	    //     	// dispense candy
	    //     }
	    // });
	}

	// private navigateToStart(): void {
	// 	if (this.shortTimer) {
	// 		clearTimeout(this.shortTimer);
	// 	}
	// 	if (this.longTimer) {
	// 		clearTimeout(this.longTimer);
	// 	}
	// 	this.router.navigate(['/rating']);
	// }

	// getWinner(finalNums) {
	// 	return true;
	// }

}
