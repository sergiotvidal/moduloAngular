import { Component } from '@angular/core';

@Component({
  selector: 'sn-welcome-forms',
  templateUrl: './welcomeforms.component.html'
})
export class WelcomeFormsComponent {
  isRegisterFormVisible = false;

  toggleForm(isRegisterClick) {
    this.isRegisterFormVisible = isRegisterClick;
  }
}