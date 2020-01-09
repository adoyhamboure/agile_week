import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(private http: HttpClient) { }

  export(content: string) {
    return new Promise(resolve => {
      this.http.post(environment.apiUrl+'generate', { "content": encodeURI(content) })
      .subscribe(
      data  => {
        console.log("POST Request is successful ", data);
        resolve(data)
      },
      error  => {
        console.log("Error", error);
      });
    });
  }
}
