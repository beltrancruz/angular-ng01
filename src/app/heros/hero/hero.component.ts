import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    name: string = 'Spiderman';
    age: number = 40;

    get nameCapitalize():string{
        return this.name.toUpperCase();
    }

    getName():string{
        return `${this.name} - ${this.age}`;
    }

    setName():void{
        this.name = 'Ironman';
    }

    setAge():void{
        this.age = 55;
    }

}