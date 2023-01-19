import {TestBed, waitForAsync} from "@angular/core/testing";
import {HeroService} from "../../services/hero.service";
import {HeroSearchComponent} from "./hero-search.component";
import {Hero} from "../../hero";
import {Observable, of} from "rxjs";

describe("HeroSearchComponent", () => {
    let component: HeroSearchComponent;
    let heroService: HeroService;
    const hero: Hero[] = [{id: 42, name: "Test"}]

    class MockHeroService {
        getHeroes(id: number): Observable<Hero[]> {
            return of(hero)
        }

        getHero(id: number): Observable<Hero> {
            return of(hero[0]);
        }

        searchHeroes(term: String): Observable<Hero[]> {
            return of(hero);
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                HeroSearchComponent,
                {provide: HeroService, useClass: MockHeroService}
            ]
        });

        component = TestBed.inject(HeroSearchComponent);
        heroService = TestBed.inject(HeroService);
    });

    it('displays the correct hero', waitForAsync(() => {
        component.ngOnInit(); //todo mention calling oninnit and async in presentation
        component.heroes$.subscribe(returnedHero => {
            expect(returnedHero).toBe(hero);
        })
    }))
});
