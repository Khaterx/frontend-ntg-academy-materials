import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-child',
  imports: [ButtonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges {

  title = signal('Child Component Title');
  @Input() dataFromParent = '';
  @Output() sendDataToParent = new EventEmitter<string>();

  onButtonClick() {
    this.sendDataToParent.emit('Data sent from Child to Parent Component');
  }


    ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes: ${changes}  `);
    if (changes['dataFromParent']) {
      const previousValue = changes['dataFromParent'].previousValue;
      const currentValue = changes['dataFromParent'].currentValue;
      console.log(`dataFromParent changed from ${previousValue} to ${currentValue}`);
    }

  }
}
