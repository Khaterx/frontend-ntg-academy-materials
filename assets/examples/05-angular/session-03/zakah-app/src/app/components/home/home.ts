import { Component, signal } from '@angular/core';
import { Calculator } from '../calculator/calculator';
import { Contact } from '../contact/contact';
import { About } from '../about/about';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Calculator, Contact, About,CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = signal<string>('Zakah Calculator App 👋');
}
