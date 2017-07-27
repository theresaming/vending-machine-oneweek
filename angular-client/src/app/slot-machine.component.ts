import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCaptionService } from './image-caption.service';

// import * as jQuery from 'jquery';
declare var jQuery: any;
import 'assets/js/jquery.jSlots.js';

@Component({
	selector: 'slot-machine',
	templateUrl: './templates/slot-machine.component.html',
	styleUrls: ['css/slot-machine.component.css', 'css/screen.css']
})
export class SlotMachineComponent implements OnInit {
	public showReward = false;
	public winner = false;
	public hershey = [1, 2, 4];
	public lolly = [3, 5, 6];
	public message = "";
	public spinning = false;

	public longTimer;
	public shortTimer;

	constructor(
		private router: Router,
		private imageCaptionService: ImageCaptionService) {
	}

	public test(){
	    jQuery('h1').text('Magic');
	    jQuery('.slot').jSlots({
	        number: 3,
	        spinner: '#playBtn',
	        onEnd: function (finalNums) {
	            alert(finalNums);
	        }
	    });
 	}

	ngOnInit(): void {
		this.longTimer = setTimeout(() => this.navigateToStart(), 15000);
		jQuery('.slot').jSlots({
	        number: 3,
	        spinner: '#playBtn',
	        onStart: () => {
        		if (this.longTimer) {
        			clearTimeout(this.longTimer);
        		}
	        },
	        onEnd: finalNums => {
	        	this.showReward = true;
        		this.winner = true;
        		this.message = "You win! Grab your snack!";
        		this.spinning = true;
        		this.imageCaptionService.sendVend();
        		jQuery('#playBtn').attr('id', 'blah');
        		jQuery('.rewardarea').css('opacity', 1);
        		this.shortTimer = setTimeout(() => this.navigateToStart(), 3000);
	        	// dispense candy
	        }
	    });
	}

	private navigateToStart(): void {
		if (this.shortTimer) {
			clearTimeout(this.shortTimer);
		}
		if (this.longTimer) {
			clearTimeout(this.longTimer);
		}
		this.router.navigate(['/rating']);
	}

	getWinner(finalNums) {
		return true;
	}

}
