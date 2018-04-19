import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchComponent implements OnInit {


  switches = [true, true, true, true, true, true, true, true, true, true];
  flipSwitch(idx){
    this.switches[idx] = !this.switches[idx];
  }

  ngOnInit() {
  }

}
