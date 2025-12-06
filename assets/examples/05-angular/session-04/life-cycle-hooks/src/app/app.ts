import { Component, signal } from '@angular/core';
import { Parent } from "./components/parent/parent";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [Parent, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('life-cycle-hooks');
}
