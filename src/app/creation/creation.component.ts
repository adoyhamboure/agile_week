import { Component, OnInit, Input } from '@angular/core';
import { Creations } from 'src/models/Creations';
import { Subscription, Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';
import { FileUploaderService } from '../file-uploader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {
  private eventsSubscription: Subscription;
  private creations$: Observable<Creations>;
  @Input() clickEvent: Observable<void>;
  creations: Creations;
  constructor(
    private dataObservableService: DataObservableService,
    private fileUploaderService: FileUploaderService
  ) { }

  ngOnInit() {
    this.creations = new Creations();
    this.creations.imageList = []
    this.creations$ = this.dataObservableService.SubscribeToCreations();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setCreations(this.creations.introduction, this.creations.imageList);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.creations$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.introduction !== undefined) {
            this.creations.introduction = data.introduction;
          }
          if (data.imageList !== undefined) {
            this.creations.imageList = data.imageList;
          }
        }
      })
    ).subscribe();
  }

  removeImage(name: string) {
    let index = -1;
    for(var i = 0; i < this.creations.imageList.length; i += 1) {
      console.log(this.creations.imageList[i]['name'], ' ===', name)
      if(this.creations.imageList[i]['name'] === name) {
          index = i;
      }
    }
    console.log(index)
    if (index !== -1) {
      this.creations.imageList.splice(index, 1);
    }
    console.log(this.creations.imageList)
  }

  uploadImages(event) {
    const files = event.target.files;
    const formData = new FormData();
    for(let img of files){
      formData.append('files', img);
    }
    this.fileUploaderService.uploadMultipleFiles(formData, (res) => {
      res.files.forEach((e) => {
        let index = -1;
        for(var i = 0; i < this.creations.imageList.length; i += 1) {
          if(this.creations.imageList[i]['name'] === e.originalname) {
              index = i;
          }
        }
        if (index === -1) {
          this.creations.imageList.push({url:environment.apiUrl + e.path, name: e.originalname, type: e.mimetype})
        }
      })
    }) 
  }
}
