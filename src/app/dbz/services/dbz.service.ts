import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    constructor() {
        console.log('Dbz service has been initialized');
    }

    get characters():Character[]{
        return [...this._characters]
    }

    addCharacter(character:Character){
        this._characters.push(character)
    }

    

    private _characters: Character[] = [
        {
          name: 'Goku',
          power: 3500
        },
        {
          name: 'Vegeta',
          power: 7500
        }
    ];

    private _character: Character = {
        name: 'Trunks',
        power: 2500
    };
}