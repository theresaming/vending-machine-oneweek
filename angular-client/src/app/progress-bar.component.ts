import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './templates/progress-bar.component.html',
  styleUrls: ['css/screen.css']
})
export class ProgressBarComponent implements OnInit {
  public curr: number = 1;

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
    for (let i = this.curr + 1; i <= 10; i++) {
      arr.push(i);
    }
    return arr;
  }

  ngOnInit(): void {
    var that = this;

    setInterval(function() {
      if (that.curr < 10) {
        that.curr++;
        if (that.curr == 10) {
          alert("done");
        }
      }
    }, 1000);
  }
}
