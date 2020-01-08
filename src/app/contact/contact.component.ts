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
      this.dataObservableService.setContacts(this.contacts.phone, this.contacts.mail);
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
        }
      })
    ).subscribe();
  }

}
