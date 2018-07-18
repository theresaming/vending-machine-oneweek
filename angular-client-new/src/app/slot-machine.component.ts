import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCaptionService } from './image-caption.service';
// import { SlotMachine } from 'jquery-slotmachine';
import * as jQuery from 'jquery';
// declare var jQuery: any;
// import 'assets/js/jquery.jSlots.js';

@Component({
  selector: 'slot-machine',
  templateUrl: './templates/slot-machine.component.html',
  styleUrls: ['css/slot-machine.component.css']
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
  //  const element = document.getElementById('machine');
  //  const machine = new SlotMachine(element, { /* options */ });
  //  const planeMachine = document.querySelector('machine');
  // new SlotMachine(planeMachine, {
  //  active: 1,
  //  delay: 450,
  //  auto: 1500,
  //  randomize() {
  //  return this.nextIndex;
  //  }
  // });
  // }

  ngOnInit(): void {

  }
