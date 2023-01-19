import {TempHeroComponent} from "./temp-hero.component";

describe('temp-hero', () => {
    it('#clicked() should create a temporary hero', () => {
        const component = new TempHeroComponent();
        expect(component.hero).withContext("no hero at first").toBeUndefined();

        component.clicked();
        expect(component.hero).withContext('exists after click').toBeDefined();

        component.deleted();
        expect(component.hero).withContext('deleted after second click').toBeUndefined();
    });

    it('#deleted() should delete the temporary hero', () => {
        const component = new TempHeroComponent();
        expect(component.hero).withContext("no hero at first").toBeUndefined();

        component.clicked();
        expect(component.hero).withContext('exists after click').toBeDefined();

        component.deleted();
        expect(component.hero).withContext('deleted after second click').toBeUndefined();
    });
});
