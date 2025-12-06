import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchAPI } from '../../shared/services/fetch-api';
import { Product } from '../../shared/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit ,OnDestroy{
  products:Product[] = [];
  _unsubscribe: Subscription | undefined;
  title = signal('Fetch-Api');
  // _fetchAPI = inject(FetchAPI); // Inject the FetchAPI service
  constructor(private fetchAPI: FetchAPI) {
    //this.title.set('New api');
    this.title.update((data)=>{
        data = 'New api';
        return data
    })

  }


  ngOnInit(): void {
    this.fetchAllProducts();
  }

    ngOnDestroy(): void {
    
    this._unsubscribe?.unsubscribe();
    }

  fetchAllProducts(): void {
   this._unsubscribe = this.fetchAPI.getProducts().subscribe(
      (data) => {
        this.products = data;
        // console.log(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Complete');
      }
    );
  }


}
