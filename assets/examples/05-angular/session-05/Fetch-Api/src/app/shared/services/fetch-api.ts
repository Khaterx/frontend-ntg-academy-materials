import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class FetchAPI {
  // it's not a best practice to hardcode the api url use environment ( configuration.env)
  private apiUrl = 'https://fakestoreapi.com/products';

  private _http = inject(HttpClient);


  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }


    addProducts(product: Product): Observable<Product[]> {
    return this._http.post<Product[]>(this.apiUrl, product).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }

    updateProducts(id: number): Observable<Product[]> {
    return this._http.put<Product[]>(this.apiUrl, id).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }
  //   deleteProducts(id: number): void {
  //    this._http.delete(this.apiUrl, id).pipe(
  //     catchError((error) => {
  //       console.error('Error fetching products:', error);
  //       throw error;
  //     })
  //   );
  // }
}
