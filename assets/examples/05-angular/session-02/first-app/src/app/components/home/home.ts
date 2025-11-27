import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  // templateUrl: './home.html',
  template:`
    <h1>Welcome to the Home Page</h1>
    <p>This is the home component of the application.</p>
    <p>My name is {{name()}}.</p>
    
  `,
  styleUrl: './home.css',
})
export class Home {
  // name:WriteableSignal<string> = signal<string>('Angular User');
  name = signal<string>('Angular User');
  nameWithPrefix = this.name.asReadonly(); // Example of creating a readonly signal for now

}
