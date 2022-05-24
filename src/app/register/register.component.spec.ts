import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //DOM Render Tests

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should have a password input', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const inputs = element.querySelectorAll('input');
    expect(inputs[1].placeholder).toEqual('********');
  });

  it('should have a confirm password input', () => {
    debugger;
    const element: HTMLElement = fixture.nativeElement;
    const inputs = element.querySelectorAll('input');
    expect(inputs[2].placeholder).toEqual('********');
  });

});
