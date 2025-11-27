import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgClass, NgStyle],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  isShow = false;
  mainStyles = 'container flex justify-center mt-5 bg-gray-100 p-4 rounded-lg';
  defaultStyles = 'container flex justify-center mt-5 p-4 rounded-lg bg-teal-500';
  color = 'text-blue-600';
  defaultColor = 'text-gray-800';
}
