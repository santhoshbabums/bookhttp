import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm?: any;

  constructor(public __auth : AuthService) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  registerUser() {
    // Handle form submission here
    if (this.registrationForm.valid) {
      // Perform registration or send data to the server
      const formData = this.registrationForm.value;
      const email = formData.email;
      const password = formData.password
      this.__auth.registerUser(email,password)
      console.log(formData);
    }
  }
}
