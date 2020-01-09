import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Presentation } from 'src/models/Presentation';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  private presentation$: Observable<Presentation>;
  private eventsSubscription: Subscription;

  @Input() clickEvent: Observable<void>;
  presentation: Presentation;
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.presentation = new Presentation();
    this.presentation$ = this.dataObservableService.SubscribeToPresentation();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setPresentation(this.presentation.description);
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
            this.presentation.description = data.description;
          }
        }
      })
    ).subscribe();
  }

}
