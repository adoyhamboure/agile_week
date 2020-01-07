import { Component, OnInit, Input } from '@angular/core';
import { Creations } from 'src/models/Creations';
import { Subscription, Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.sass']
})
export class CreationComponent implements OnInit {
  private eventsSubscription: Subscription;
  private creations$: Observable<Creations>;
  @Input() clickEvent: Observable<void>;
  creations: Creations;
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.creations = new Creations();
    this.creations$ = this.dataObservableService.SubscribeToCreations();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setCreations(this.creations.introduction);
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
        }
      })
    ).subscribe();
  }


}
