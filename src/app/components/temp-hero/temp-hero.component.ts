import {Component, Input} from '@angular/core';
import {Hero} from "../../hero";

@Component({
    selector: 'app-temp-hero',
    templateUrl: './temp-hero.component.html',
    styleUrls: ['./temp-hero.component.css']
})
export class TempHeroComponent {
    hero: Hero | undefined;

    clicked() {
        this.hero = {id: Math.random() * 10, name: "Bobby"}
    }

    deleted() {
        this.hero = undefined;
    }
}
