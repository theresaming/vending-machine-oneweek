import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import * as jQuery from 'jquery';
declare var jQuery: any;
import 'assets/js/jquery.jSlots.js';

@Component({
	selector: 'slot-machine',
	templateUrl: './templates/slot-machine.component.html',
	styleUrls: ['css/slot-machine.component.css']
})
export class SlotMachineComponent implements OnInit {
	constructor(private router: Router) {
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
		jQuery('.slot').jSlots({
	        number: 3,
	        spinner: '#playBtn',
	        onEnd: finalNums => {
	        	setTimeout(() => {this.router.navigate(['/rating']);}, 1000);
	        	// dispense candy
	        }
	    });
	}
}
