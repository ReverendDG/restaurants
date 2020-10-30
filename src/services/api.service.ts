import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()

export class ApiService {

  constructor(private http:HttpClient) { }

  public mydata;

  getRestaurants(zip:string){
    this.http.get('../assets/data/' + zip + '.json').toPromise().then(
        results=>{
            console.log(results);
            this.mydata = results;
            return this.mydata;
        }
    );
  }

}
