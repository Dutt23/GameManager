import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color: string;

  availableColors = [
    { name: 'log in', color: 'primary' },
   
   
  ];
  availableRegisterColors = [
    
    { name: 'Register', color: 'accent' },
   
  ];
}
