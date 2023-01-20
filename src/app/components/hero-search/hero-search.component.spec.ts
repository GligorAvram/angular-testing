import {of} from "rxjs";
import {HeroService} from "../../services/hero.service";
import {HeroSearchComponent} from "./hero-search.component";
import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from "@angular/core/testing";
import {HEROES} from "../../mock-heroes";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import SpyObj = jasmine.SpyObj;

describe("HeroSearchComponent", () => {
    let fixture: ComponentFixture<HeroSearchComponent>;
    let value = ['getHeroes', 'getHero', 'searchHeroes']
    let component: HeroSearchComponent;
    let spyService: SpyObj<HeroService>;

    beforeEach(waitForAsync(() => {
        spyService = jasmine.createSpyObj('HeroService', value);

        TestBed.configureTestingModule({
            declarations: [HeroSearchComponent],
            providers: [
                {provide: HeroService, useValue: spyService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges()
    });

    it('searches for the correct hero', fakeAsync(() => {
        spyService.searchHeroes.and.returnValue(of([HEROES[0]]));
        //todo mention calling oninnit and async in presentation
        component.ngOnInit();
        fixture.detectChanges();
        component.search(HEROES[0].name);
        expect(spyService.searchHeroes).toHaveBeenCalledOnceWith(HEROES[0].name);
    }))

    it('displays heroes', fakeAsync(() => {
        const letter = 'a';
        let counter = 0;
        HEROES.forEach(hero => hero.name.trim().toLowerCase().includes(letter) ? counter += 1 : counter += 0);
        spyService.searchHeroes.and.returnValue(of(HEROES.filter(hero => hero.name.trim().toLowerCase().includes(letter))));

        component.ngOnInit();
        fixture.detectChanges();

        component.search(letter);
//todo mention whenstable and fakeasync
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const template = fixture.nativeElement;
            expect(template.querySelectorAll('li').length).toEqual(counter);
        })
    }))
});
