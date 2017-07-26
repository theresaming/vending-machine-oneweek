import { Component } from '@angular/core';
// import { HeroService } from './hero.service';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <progress-bar></progress-bar>
        <image-rating></image-rating>
    `
})
export class AppComponent {
	title = "Hello!";
	// <slot-machine></slot-machine>
}
