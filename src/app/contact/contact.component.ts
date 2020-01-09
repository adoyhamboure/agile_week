import { Component, OnInit, Input } from '@angular/core';
import { Contacts } from 'src/models/Contacts';
import { Subscription, Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private eventsSubscription: Subscription;
  private contacts$: Observable<Contacts>;
  @Input() clickEvent: Observable<void>;
  contacts: Contacts;
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.contacts = new Contacts();
    this.contacts$ = this.dataObservableService.SubscribeToContacts();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setContacts(this.contacts.phone, this.contacts.mail, this.contacts.linkedin, this.contacts.facebook, this.contacts.twitter,this.contacts.youtube, this.contacts.instagram, this.contacts.website );
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.contacts$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.phone !== undefined) {
            this.contacts.phone = data.phone;
          }
          if (data.mail !== undefined) {
            this.contacts.mail = data.mail;
          }
          if (data.linkedin !== undefined) {
            this.contacts.linkedin = data.linkedin;
          }
          if (data.facebook !== undefined) {
            this.contacts.facebook = data.facebook;
          }
          if (data.twitter !== undefined) {
            this.contacts.twitter = data.twitter;
          }
          if (data.youtube !== undefined) {
            this.contacts.youtube = data.youtube;
          }
          if (data.instagram !== undefined) {
            this.contacts.instagram = data.instagram;
          }
          if (data.website !== undefined) {
            this.contacts.website = data.website;
          }
        }
      })
    ).subscribe();
  }

}
