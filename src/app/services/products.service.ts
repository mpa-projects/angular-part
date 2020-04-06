import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface skr{
  
}

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    return this.http.get(
      "https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/categories"
    );
  }

  getProductItem(): Observable<any> {
    return this.http.get(
      "https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api/products/search?query=Pizza"
    );
  }
}
