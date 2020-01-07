import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Presentation } from 'src/models/Presentation';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass']
})
export class PresentationComponent implements OnInit {

  private presentation$: Observable<Presentation>;
  private eventsSubscription: Subscription;

  @Input() clickEvent: Observable<void>;
  description: string;
  qualifications: string;
  interests: string;
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.presentation$ = this.dataObservableService.SubscribeToPresentation();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setPresentation(this.interests, this.description, this.qualifications);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.presentation$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.description !== undefined) {
            this.description = data.description;
          }
          if (data.qualifications !== undefined) {
            this.qualifications = data.qualifications;
          }
          if (data.interests !== undefined) {
            this.interests = data.interests;
          }
        }
      })
    ).subscribe();
  }

}
