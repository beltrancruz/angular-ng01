import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private service: DbzService) {

  }

  get characters(){
    return this.service.characters
  }

  addCharacter(){
    
  }

  // get characters(): Character[]{
  //   return this.service.characters;
  // }

  // add(character:Character){
  //   console.log(character);
  //   this.characters.push(character);
  // }
}
