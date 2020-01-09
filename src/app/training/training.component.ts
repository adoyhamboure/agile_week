import { Component, OnInit, Input } from '@angular/core';
import { Trainings } from 'src/models/Trainings';
import { DatepickerMode } from 'ng2-semantic-ui';
import { Subscription, Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  private trainings$: Observable<Trainings>;
  private eventsSubscription: Subscription;
  @Input() clickEvent: Observable<void>;
  trainings: Trainings;
  mode: DatepickerMode
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.mode = "month";
    this.trainings = new Trainings;
    this.trainings.trainingsArray = [];
    this.trainings$ = this.dataObservableService.SubscribeToTrainings();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setTrainings(this.trainings.introduction, this.trainings.trainingsArray);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.trainings$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.introduction !== undefined) {
            this.trainings.introduction = data.introduction;
          }
          if (data.trainingsArray !== undefined) {
            this.trainings.trainingsArray = data.trainingsArray;
          }
        }
      })
    ).subscribe();
  }

  addTraining(): void {
    const line = { period: { startDate: undefined, endDate: undefined }, label: undefined, school: undefined, description: undefined };
    this.trainings.trainingsArray.push(line);
  }

  removeTraining(i: number): void {
    this.trainings.trainingsArray.splice(i, 1);
  }

}
