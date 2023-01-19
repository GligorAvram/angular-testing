import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../hero";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('HeroDetailComponent', () => {
    let component: HeroDetailComponent;
    let fakeHeroService: HeroService;
    let fakeActivatedRoute;
    let fixture: ComponentFixture<HeroDetailComponent>;
    const heroes: Hero[] = [{id: 42, name: "Test"}]

    beforeEach(waitForAsync(() => {
        fakeHeroService = jasmine.createSpyObj<HeroService>(
            'HeroService',
            {
                getHeroes: of(heroes),
                getHero: of(heroes[0])
            }
        );

        fakeActivatedRoute = {
            snapshot: {
                paramMap: {
                    get(name: string): string {
                        return heroes[0].id.toString()
                    }
                }
            }
        }

        TestBed.configureTestingModule({
            declarations: [HeroDetailComponent],
            providers: [
                {provide: HeroService, useValue: fakeHeroService},
                {provide: ActivatedRoute, useValue: fakeActivatedRoute}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }))

    beforeEach(() => {
        fakeActivatedRoute = TestBed.inject(ActivatedRoute);
        fixture = TestBed.createComponent(HeroDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(component).toBeDefined();
    });

    it(`should have the hero name`, () => {
        expect(component.hero?.name).toEqual(heroes[0].name);
    });

    it('should render the hero name', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(`#hero-${heroes[0].id}`).textContent).toContain(heroes[0].name.toUpperCase());
    });
});

