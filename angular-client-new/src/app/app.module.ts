import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SlotMachineComponent } from './slot-machine.component';
import { ProgressBarComponent } from './progress-bar.component';
import { ImageRatingComponent } from './image-rating.component';
import { RatingComponent } from './rating.component';

// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroesComponent } from './heroes.component';
// import { DashboardComponent } from './dashboard.component';
import { ImageCaptionService } from './image-caption.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SlotMachineComponent,
    ProgressBarComponent,
    ImageRatingComponent,
    RatingComponent,
    // HeroDetailComponent,
    // HeroesComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    ImageCaptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
