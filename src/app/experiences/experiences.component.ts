import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Experiences } from 'src/models/Experiences';
import { DatepickerMode } from 'ng2-semantic-ui';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.sass']
})
export class ExperiencesComponent implements OnInit {
  private eventsSubscription: Subscription;
  private experiences$: Observable<Experiences>;
  @Input() clickEvent: Observable<void>;
  experiences: Experiences
  mode: DatepickerMode
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.mode = "month";
    this.experiences = new Experiences();
    this.experiences.experiencesArray = [
      { period: { startDate: undefined, endDate: undefined }, label: undefined, company: undefined, description: undefined },
      { period: { startDate: undefined, endDate: undefined }, label: undefined, company: undefined, description: undefined }
    ];
    this.experiences$ = this.dataObservableService.SubscribeToExperiences();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setExperiences(this.experiences.introduction, this.experiences.experiencesArray);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.experiences$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.introduction !== undefined) {
            this.experiences.introduction = data.introduction;
          }
          if (data.experiencesArray !== undefined) {
            this.experiences.experiencesArray = data.experiencesArray;
          }
        }
      })
    ).subscribe();
  }

  removeExperience(): void {
    this.experiences.experiencesArray.pop();
  }

  addExperience(): void {
    const line =  { period: { startDate: undefined, endDate: undefined }, label: undefined, company: undefined, description: undefined };
    this.experiences.experiencesArray.push(line);
  }
}
