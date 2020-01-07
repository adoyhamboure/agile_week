import { Component, OnInit, Input } from '@angular/core';
import { References } from 'src/models/References';
import { Subscription, Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.sass']
})
export class ReferenceComponent implements OnInit {
  private eventsSubscription: Subscription;
  private references$: Observable<References>;
  @Input() clickEvent: Observable<void>;
  references: References;
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.references = new References();
    this.references.comments = [
      { author: undefined, company: undefined, value: undefined }
    ];
    this.references$ = this.dataObservableService.SubscribeToReferences();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setReferences(this.references.comments);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.references$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.comments !== undefined) {
            this.references.comments = data.comments;
          }
        }
      })
    ).subscribe();
  }

  removeComment(): void {
    this.references.comments.pop();
  }

  addComment(): void {
    const line = { author: undefined, company: undefined, value: undefined };
    this.references.comments.push(line);
  }

}
