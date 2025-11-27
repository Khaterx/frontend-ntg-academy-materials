import { Component } from '@angular/core';
import { Contact } from "../contact/contact";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  imports: [Contact, AboutComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
