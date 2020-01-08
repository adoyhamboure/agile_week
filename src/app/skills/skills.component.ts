import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Skills } from 'src/models/Skills';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private skills$: Observable<Skills>;
  private eventsSubscription: Subscription;
  @Input() clickEvent: Observable<void>;
  skills: Skills;

  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.skills = new Skills();
    this.skills.skillsArray = [
      { label: undefined, value: undefined },
      { label: undefined, value: undefined },
      { label: undefined, value: undefined },
      { label: undefined, value: undefined },
      { label: undefined, value: undefined },
      { label: undefined, value: undefined }
    ];
    this.skills$ = this.dataObservableService.SubscribeToSkills();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setSkills(this.skills.introduction, this.skills.skillsArray);
    });

  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.skills$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.introduction !== undefined) {
            this.skills.introduction = data.introduction;
          }
          if (data.skillsArray !== undefined) {
            this.skills.skillsArray = data.skillsArray;
          }
        }
      })
    ).subscribe();
  }

  addSkill(): void {
    const line = {label: undefined, value: undefined};
    this.skills.skillsArray.push(line);
  }

  removeSkill(): void {
    this.skills.skillsArray.pop();
  }

}
