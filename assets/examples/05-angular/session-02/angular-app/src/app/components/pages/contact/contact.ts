import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  title: string = 'Contact Page Component 😁';
  image: any = 'https://picsum.photos/seed/picsum/200/300';
  bgColor: string = '#efef';

  sayHello(): void {
    alert('Hello from Contact Component!');
  }
}
