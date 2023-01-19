import {TitleCasePipe} from "./title-case.pipe";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, NO_ERRORS_SCHEMA} from "@angular/core";

describe('Testing TitleCasePipe as functions', () => {

    const pipe = new TitleCasePipe();

    it('transforms "abc" to "Abc"', () => {
        expect(pipe.transform('abc')).toBe('Abc');
    });

    it('transforms "abc def" to "Abc Def"', () => {
        expect(pipe.transform('abc def')).toBe('Abc Def');
    });
});

@Component({
    template: `
        <input [(ngModel)]="value">
        <span>{{ value | titlecase }}</span>
    `
})
class TestComponent {
    value: string = "";
}

describe('Testing TitleCasePipe with component support', () => {
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [TestComponent, TitleCasePipe],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(TestComponent);

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    })

    it('should input value to Title Case', () => {
        fixture.componentInstance.value = 'quick BROWN  fOx';
        const hostElement: HTMLElement = fixture.nativeElement;

        fixture.detectChanges();
        const nameDisplay: HTMLElement = hostElement.querySelector('span')!;
        expect(nameDisplay.textContent).toBe('Quick Brown  Fox');
    });
});
