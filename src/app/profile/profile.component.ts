import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { Profile } from 'src/models/Profile';
import { tap } from 'rxjs/operators';
import { FileUploaderService } from '../file-uploader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private profile$: Observable<Profile>;
  private eventsSubscription: Subscription;
  @Input() clickEvent: Observable<void>;
  profile: Profile;
  constructor(
    private fileUploaderService: FileUploaderService,
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.profile = new Profile();
    this.profile$ = this.dataObservableService.SubscribeToProfile();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setProfile(this.profile.lastName, this.profile.firstName, this.profile.imageUrl, this.profile.city, this.profile.job, this.profile.experience);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.profile$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.firstName !== undefined) {
            this.profile.firstName = data.firstName;
          }
          if (data.lastName !== undefined) {
            this.profile.lastName = data.lastName;
          }
          if (data.imageUrl !== undefined) {
            this.profile.imageUrl = data.imageUrl;
          }
          if (data.city !== undefined) {
            this.profile.city = data.city;
          }
          if (data.job !== undefined) {
            this.profile.job = data.job;
          }
          if (data.experience !== undefined) {
            this.profile.experience = data.experience;
          }
        }
      })
    ).subscribe();
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.fileUploaderService.uploadFile(formData, (e) => {
      this.profile.imageUrl = environment.apiUrl+e.path;
    }) 
  }

}
