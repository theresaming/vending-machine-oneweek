import { Component } from '@angular/core';
// import { HeroService } from './hero.service';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
	title = "Hello!";
	// <slot-machine></slot-machine>

	onRated(event, progressBar): void {
		console.log(event);
		progressBar.reset();
	}
}
