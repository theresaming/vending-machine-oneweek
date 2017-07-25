import { Component } from '@angular/core';
// import { HeroService } from './hero.service';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <slot-machine></slot-machine>
    `
})
export class AppComponent {
}
