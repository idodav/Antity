import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})

export class NavbarComponent {
  @Input() title: string;

  constructor() {
  }
  
}

