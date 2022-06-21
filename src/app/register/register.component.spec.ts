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

    // Validations - Username

    it('should return error message when username input is empty', () => {

      const errorMessage = 'You must enter a value';
  
      expect(component.email.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      expect(component.getUsernameErrorMessage())
        .withContext('no value has given')
        .toBe(errorMessage);
  
      //Hint
      const element: HTMLElement = fixture.nativeElement;
      const errorLabel = element.querySelector('mat-error');
      expect(errorLabel?.textContent).toEqual(errorMessage);
    });
  
    it('should return error message when username is invalid', () => {
  
      expect(component.email.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.email.setValue('ccc');
      component.email.updateValueAndValidity();
      expect(component.getUsernameErrorMessage())
        .withContext('an invalid email has given')
        .toBe('Not a valid email');
    });
  
    it('should return error message when username email domain is invalid', () => {
  
      expect(component.email.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.email.setValue('user@foobar');
      component.email.updateValueAndValidity();
      expect(component.getUsernameErrorMessage())
        .withContext('an invalid email domain has given')
        .toBe('The email has to have a valid value. Ex.: gmail.com');
    });
  
    // Validations - Password
  
    it('should return error message when password input is empty', () => {
      
      const errorMessage = 'You must enter a value';
  
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      expect(component.getPasswordErrorMessage())
        .withContext('no value has given')
        .toBe('You must enter a value');
  
      //Hint
      const element: HTMLElement = fixture.nativeElement;
      const errorLabel = element.querySelector('mat-error');
      expect(errorLabel?.textContent).toEqual(errorMessage);
    });
  
    it('should return error message when password has no digits', () => {
  
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.password.setValue('xyz');
      component.password.updateValueAndValidity();
      expect(component.getPasswordErrorMessage())
        .withContext('no value has given')
        .toBe('Password needs at least one digit');
    });
  
    it('should return error message when password has no lowercase char', () => {
  
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.password.setValue('123');
      component.password.updateValueAndValidity();
      expect(component.getPasswordErrorMessage())
        .withContext('no lowercase char has given')
        .toBe('Password needs at least one lowercase character');
    });
  
    it('should return error message when password has no uppercase char', () => {
   
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.password.setValue('xyz123');
      component.password.updateValueAndValidity();
      expect(component.getPasswordErrorMessage())
        .withContext('no uppercase char has given')
        .toBe('Password needs at least one uppercase character');
    });
  
    it('should return error message when password has no special character', () => {
  
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.password.setValue('Xyz123');
      component.password.updateValueAndValidity();
      expect(component.getPasswordErrorMessage())
        .withContext('no special char has given')
        .toBe('Password needs at least one special character');
    });
  
    it('should return error message when password char number is lower than 8', () => {
  
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.password.setValue('@Xyz123');
      component.password.updateValueAndValidity();
      expect(component.getPasswordErrorMessage())
        .withContext('no minimum char number has given')
        .toBe('Password needs at least 8 characters length and 32 at maximum.');
    });
  
    it('should return error message when password char number is greater than 32', () => {
  
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.password.setValue('@Xyz123@Xyz123@Xyz123@Xyz123@Xyz123');
      component.password.updateValueAndValidity();
      expect(component.getPasswordErrorMessage())
        .withContext('no minimum char number has given')
        .toBe('Password needs at least 8 characters length and 32 at maximum.');
    });
  
    it('should return no error message when password is filled with valid chars and minimum lenght', () => {
  
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.password.setValue('@Xyz123@');
      component.password.updateValueAndValidity();
      expect(component.getPasswordErrorMessage())
        .withContext('valid password given')
        .toBe('');
    });
  
    it('should return no error message when password is filled with valid chars and maximum lenght', () => {
     
      expect(component.password.invalid)
        .withContext('input is empty at first')
        .toBe(true);
      component.password.setValue('@Xyz123@@Xyz123@@Xyz123@@Xyz123@');
      component.password.updateValueAndValidity();
      expect(component.getPasswordErrorMessage())
        .withContext('valid password given')
        .toBe('');
    });

});
