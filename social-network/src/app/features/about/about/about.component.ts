import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'Hey there!! 👋';
  subtitle = 'My name is Sergio';
  description = `I'm a student in Hack-a-BOS and I want to be a backend developer !!. You can check more about me in the followings sites:`;
  links = [
    { url: 'http://linkedin.com/in/sergio-timiraos-vidal', name: 'LinkedIn' },
    { url: 'http://github.com/sergiotvidal', name: 'Github' },
    { url: '', name: 'Portfolio' },
    { url: 'http://twitter.com/cachucheiro', name: 'Twitter' }
  ];

  contact = {
    description: 'If you want to contact with me you can send me an email to:',
    mail: 'sergiotvidal2@gmail.com'
  };
}
