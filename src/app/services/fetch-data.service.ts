import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchDataService implements OnInit {
  
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
  }
  
  getProducts(): Observable<object[]>{
    const url: string = '/assets/data.json';
    return this.http.get<object[]>(url);
  }

}
