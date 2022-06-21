import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //DOM render tests

  it('should have a span with "Valorant App" text', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const buttons = element.querySelector('span')!;
    expect(buttons.textContent).toEqual('Valorant App');
  });

  it('should have a button with "Logout" and icon "logout" text', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const buttons = element.querySelector('button')!;
    expect(buttons.textContent).toEqual('Logout logout');
  });

  it('should have an anchor routing to home', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const buttons = element.querySelector('a')!;
    expect(buttons.attributes[1].value).toEqual('/home');
  });
});
