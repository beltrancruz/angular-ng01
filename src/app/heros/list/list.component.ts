import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroDeleted: string = '';

  deleteHero():void{
    this.heroDeleted = (this.heros.shift()) || '';
  }



}
