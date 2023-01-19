import {TempHeroDisplayComponent} from './temp-hero-display.component';
import {Hero} from "../../hero";
import {first} from "rxjs";

describe('TempHeroDisplayComponent', () => {
    it('The component emits the object it received', () => {
        const hero: Hero = {id: 42, name: 'Test'};
        const comp = new TempHeroDisplayComponent();
        comp.hero = hero;

        comp.selected.pipe(
            first()
        )
            .subscribe(
                (selectedHero: Hero | undefined) => expect(selectedHero).toBe(hero)
            );
        comp.click();
    });

});
