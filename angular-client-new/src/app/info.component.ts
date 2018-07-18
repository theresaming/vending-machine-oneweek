import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
		<div class="overlay" *ngIf="showOverlay"></div>
    <a (click)="showInfo()"
    *ngIf="showOverlay" class="btn-big-red" style="position: fixed; left: 30%; right: 30%; margin: 5% auto; top: 25%;">Help me!</a>
		<progress-bar #progressBar></progress-bar>
    `,
    styleUrls: ['css/rating.component.css', 'css/screen.css']
})

export class InfoComponent {
	showOverlay = false;

	constructor(private router: Router) {}

	showInfo(): void {
		this.showOverlay = true;
	}
}
