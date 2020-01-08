import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { Profile } from 'src/models/Profile';
import { tap } from 'rxjs/operators';

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
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.profile = new Profile();
    this.profile$ = this.dataObservableService.SubscribeToProfile();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setProfile(this.profile.lastName, this.profile.firstName);
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
        }
      })
    ).subscribe();
  }

}
