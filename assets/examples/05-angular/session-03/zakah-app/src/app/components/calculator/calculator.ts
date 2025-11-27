import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  imageUrl = signal(`https://picsum.photos/seed/picsum/${200}/${300}`);
    isAvailable = signal(true);
  product = [
    {
      id: 1,
      productName: 'Laptop',
      price: 1500,
      quantity: 2,
    },
    {
      id: 2,
      productName: 'Mobile',
      price: 500,
      quantity: 5,
    },
    {
      id: 6,
      productName: 'Mobile',
      price: 500,
      quantity: 0,
    },
    {
      id: 3,
      productName: 'Tablet',
      price: 1000,
      quantity: 3,
    },
    {
      id: 4,
      productName: 'Camera',
      price: 800,
      quantity: 4,
    },
  ];
}
