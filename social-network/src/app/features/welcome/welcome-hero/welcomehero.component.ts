import { Component, Input } from '@angular/core';

@Component({
  selector: 'sn-welcome-hero',
  templateUrl:'./welcomehero.component.html',
  styles: [
    `
    i {
      width: 40px;
    }
    `
  ]

})
export class WelcomeHeroComponent {
  @Input() rows: HeroItem[];

}