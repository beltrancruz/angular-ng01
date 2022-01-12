import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";
import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-character',
    templateUrl: './character.component.html'
})
export class CharacterComponent {
    @Input('data')
    character: Character = {
        name: '',
        power: 0
    };

    constructor(private service: DbzService){

    }

    // @Output()
    // onNewCharacter: EventEmitter<Character> = new EventEmitter()

    // changeName(event:any){
    //   console.log(event.target.value);
    
    // }

    add(){
        if(this.character.name.trim().length === 0){
            return;
        }
        //this.onNewCharacter.emit(this.character);
        this.service.addCharacter(this.character);
        this.character = {
            name: '',
            power: 0
        };
        
    }
}