import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, of, retry, tap} from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {

  private products: ProductType[] = [];

  constructor(
    private http: HttpClient
  ) {
  }


  getProducts(): Observable<ProductType[] > {

    // let params = new HttpParams();
    // params = params.set('extraField', 1);

    return this.http.get< ProductType[]>('https://testologiaa.site/pizzas',{
      // observe: 'response',
      // responseType: 'text',
      // headers: new HttpHeaders({
      //   Authorization: 'auth-token'
      // }),
      // params: params
    })
      .pipe(
        tap((result)=>{
          console.log(result)
        }),

        // map((result) => ( result.data)),
        catchError(error=>{
          // throw new Error('omg');
          return of([]);
        }),

        // retry(3)
      )
  }

  getProduct(id: number): Observable<ProductType> {
    // return this.products.find(item => item.id === id);
    return this.http.get< ProductType>(`https://testologia.site/pizzas?id=${id}`)
  }

  createOrder(data: {product: string, address: string, phone: string}){
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-pizza`, data)

  }


}
