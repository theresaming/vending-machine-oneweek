import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RatingComponent } from './rating.component';
import { SlotMachineComponent } from './slot-machine.component';

const routes: Routes = [
  {
    path: 'rating',
    component: RatingComponent
  },
  {
    path: 'slotmachine',
    component: SlotMachineComponent
  },
  {
    path: '',
    redirectTo: '/rating',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
