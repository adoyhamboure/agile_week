import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {
  title = 'fileUpload';
  constructor(private http: HttpClient){}

  uploadFile(formData){
    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  uploadMultipleFiles(formData){
    this.http.post<any>('http://localhost:3000/multipleFiles', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
