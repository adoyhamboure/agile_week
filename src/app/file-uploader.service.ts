import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {
  title = 'fileUpload';
  constructor(private http: HttpClient){}

  uploadFile(formData, callback){
    this.http.post<any>(environment.apiUrl+'file', formData).subscribe(
      (res) => callback(res),
      (err) => console.log(err)
    );
  }

  uploadMultipleFiles(formData, callback){
    this.http.post<any>(environment.apiUrl+'multipleFiles', formData).subscribe(
      (res) => callback(res),
      (err) => console.log(err)
    );
  }
}
