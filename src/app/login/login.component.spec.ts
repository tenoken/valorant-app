import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //DOM Render Tests

  it('should create', () => {
    debugger;

    expect(component)
      .toBeDefined();
  });

  it('should hide the value of password field as default setting', () => {

    expect(component.hide)
      .toBe(true);
  });

  it('should have a button with "Login" text', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const buttons = element.querySelectorAll('button')!;
    expect(buttons[1].textContent).toEqual('Login');
  });

  it('should have a button with "Register" text', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const buttons = element.querySelectorAll('button')!;
    expect(buttons[2].textContent).toEqual('Register');
  });

  it('should have an username input', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const inputs = element.querySelectorAll('input');
    expect(inputs[0].placeholder).toEqual('user@email.com');
  });

  it('should have a passwoed input', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const inputs = element.querySelectorAll('input');
    expect(inputs[1].placeholder).toEqual('********');
  });

  it('should have a checkbox', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const checkbox = element.querySelector('checkbox');
    expect(checkbox?.textContent).toEqual('Keep me connected');
  });

  // Validations
});
