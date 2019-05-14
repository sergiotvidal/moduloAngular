import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-footer',
  template: `
    <nav class="navbar navbar-dark bg-primary text-light">
      <span>@Sergio Timiraos Vidal 2019</span>
      <a class="btn btn-link text-white" routerLink="/about">About</a>
    </nav>
  `,
  styles: []
})
export class FooterComponent {}