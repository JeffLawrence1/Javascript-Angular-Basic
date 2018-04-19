import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimeComponent implements OnInit {
  time = new Date();
  lastTimeZoneSelected = null;

  getDateByZone(timezone) {
    this.time = new Date();
    if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() + 1);
    } else if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() + 2);
    } else if (timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 3);
    }
    this.lastTimeZoneSelected = timezone;
  }


  ngOnInit() {
  }

}
