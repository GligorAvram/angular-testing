import {HeroService} from "./hero.service";
import {HttpClient} from "@angular/common/http";
import {HEROES} from "../mock-heroes";
import {of, Subscription} from "rxjs";
import {MessageService} from "./message.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('HeroService with spies', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let heroService: HeroService;
    let subscription: Subscription;

    beforeEach(() => {
            httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
            heroService = new HeroService(httpClientSpy, new MessageService());
        }
    )

    afterAll(() => {
        subscription.unsubscribe();
    })

    it('Should return all heroes from the server', (done: DoneFn) => {
        httpClientSpy.get.and.returnValue(of(HEROES));

        subscription = heroService.getHeroes().pipe().subscribe({
            next: heroes => {
                expect(heroes)
                    .withContext('get heroes from server')
                    .toEqual(HEROES);
                done();
            },
            error: done.fail
        });
        expect(httpClientSpy.get.calls.count())
            .withContext('one call')
            .toBe(1);
    });
})

describe('HeroService with the testbed', () => {
        let httpClient: HttpClient;
        let httpController: HttpTestingController;
        let heroService: HeroService;
        let subscription: Subscription;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [HeroService]
            });

            httpClient = TestBed.inject(HttpClient)
            httpController = TestBed.inject(HttpTestingController);
            heroService = TestBed.inject(HeroService);
        });

        afterEach(() => {
            httpController.verify(); //Verifies that no requests are outstanding.
            subscription.unsubscribe();
        });

        it('Should return all heroes from the server without spies', (done: DoneFn) => {

            subscription = heroService.getHeroes().subscribe({
                next: heroes => {
                    expect(heroes)
                        .withContext('get heroes from server')
                        .toEqual(HEROES);
                    done();
                },
                error: done.fail
            });

            const request = httpController.expectOne("api/heroes");
            request.flush(HEROES);
        });

    }
)
