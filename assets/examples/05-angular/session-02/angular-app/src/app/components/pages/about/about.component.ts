import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports:[FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent   {
username: string  = 'Guest';
password:string = '';

constructor(){
  console.log(this.username);
}



}
