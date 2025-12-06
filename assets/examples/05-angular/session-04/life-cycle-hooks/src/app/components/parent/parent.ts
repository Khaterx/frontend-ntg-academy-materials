import { Component, signal } from '@angular/core';
import { Child } from './../child/child';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-parent',
  imports: [Child,FormsModule,InputTextModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  title = signal('Parent Component Title');
  sendDataToChild = signal('Data sent from Parent to Child Component');
  value='';

  showData($event: string) {
    alert($event);
  }
}
