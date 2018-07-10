import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    	<div class="overlay" *ngIf="showOverlay"></div>
    	<a (click)="buttonStart()" *ngIf="showOverlay" class="btn-big-red" style="position: fixed; top: 40%; left: 0; right: 0; margin: 5% auto">Click me!</a>
        <progress-bar #progressBar></progress-bar>
        <image-rating (onRated)="onRated($event, progressBar)"></image-rating>
    `,
    styleUrls: ['css/rating.component.css', 'css/screen.css']
})
export class RatingComponent {
	numRated: number = 0;
	showOverlay = true;

	constructor(private router: Router) {}

	onRated(event, progressBar): void {
		console.log("rating event:", event);
		this.numRated++;
		if (this.numRated == 2) {
			setTimeout(() => this.router.navigate(['/slotmachine']), 1000);
		}
		progressBar.setProgress(this.numRated);
	}

	buttonStart(): void {
		this.showOverlay = false;
	}
}

