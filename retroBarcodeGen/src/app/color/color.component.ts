import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ColorComponent implements OnInit {

color: any = [];

  constructor() { 
    for(let i = 0; i < 18; i++){
      let rando = (Math.floor(Math.random() * 18)) + 1;
      if(rando == 1){
        this.color.push('cornflowerblue')
      }
      else if(rando == 2){
        this.color.push('darkgreen')
      }
      else if(rando == 3){
        this.color.push('coral')
      }
      else if(rando == 4){
        this.color.push('darkkhaki')
      }
      else if(rando == 5){
        this.color.push('darkred')
      }
      else if(rando == 6){
        this.color.push('grey')
      }
      else if(rando == 7){
        this.color.push('lightseagreen')
      }
      else if(rando == 8){
        this.color.push('orangered')
      }
      else if(rando == 9){
        this.color.push('rebeccapurple')
      }
      else if(rando == 10){
        this.color.push('cornflowerblue')
      }
      else if(rando == 11){
        this.color.push('darkgreen')
      }
      else if(rando == 12){
        this.color.push('navy')
      }
      else if(rando == 13){
        this.color.push('orange')
      }
      else if(rando == 14){
        this.color.push('red')
      }
      else if(rando == 15){
        this.color.push('turquoise')
      }
      else if(rando == 16){
        this.color.push('violet')
      }
      else if(rando == 17){
        this.color.push('whitesmoke')
      }
      else if(rando == 18){
        this.color.push('yellow')
      }
    }
  }

  ngOnInit() {
  }

}
