import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <button (click)="operate(+base)"> +{{base}} </button>
        <span> {{ number }} </span>
        <button (click)="operate(-base)"> -{{base}} </button>
    `
})
export class CounterComponent {
    number: number = 0;
    base: number = 5;
  
    operate(value:number){
      this.number += value;
    }
}