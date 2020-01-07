import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { Profile } from 'src/models/Profile';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  private profile$: Observable<Profile>;
  private eventsSubscription: Subscription;
  @Input() clickEvent: Observable<void>;
  firstName: string;
  lastName: string;
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.profile$ = this.dataObservableService.SubscribeToProfile();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setProfile(this.lastName, this.firstName);
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
            this.firstName = data.firstName;
          }
          if (data.lastName !== undefined) {
            this.lastName = data.lastName;
          }
        }
      })
    ).subscribe();
  }

}
