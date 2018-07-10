import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './templates/progress-bar.component.html',
  styleUrls: ['css/screen.css']
})
export class ProgressBarComponent implements OnInit {
  public curr: number = 0;
  public timeout: any;

  constructor() {
  }

  public getActivatedCircles(): Array<number> {
    let arr = [];
    for (let i = 1; i <= this.curr; i++) {
      arr.push(i);
    }
    return arr;
  }

  public getUnactivatedCircles(): Array<number> {
    let arr = [];
    for (let i = this.curr + 1; i <= 2; i++) {
      arr.push(i);
    }
    return arr;
  }

  public reset(): void {
    this.curr = 0;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setInterval(() => {
      if (this.curr < 2) {
        this.curr++;
        if (this.curr == 2) {
          alert("done");
        }
      }
    }, 100);
  }

  public setProgress(progress: number): void {
    this.curr = progress;
  }

  ngOnInit(): void {
    // this.reset();
  }
}
