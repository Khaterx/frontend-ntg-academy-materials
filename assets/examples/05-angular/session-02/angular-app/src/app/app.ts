import { Component, signal } from '@angular/core';

import { Home } from './components/pages/home/home';

@Component({
  selector: 'app-root',
  imports: [ Home],
  templateUrl: './app.html',
  // inline template
  // template:`<h1>Hello from dark side!</h1>` ,
 styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-app');
}
