import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from "../../hero";


@Component({
    selector: 'app-temp-hero-display',
    templateUrl: './temp-hero-display.component.html',
    styleUrls: ['./temp-hero-display.component.css']
})
export class TempHeroDisplayComponent {
    @Input()
    hero: Hero | undefined
    @Output() selected = new EventEmitter<Hero | undefined>();

    click() {
        this.selected.emit(this.hero);
    }

    delete() {
        this.hero = undefined;
    }
}
