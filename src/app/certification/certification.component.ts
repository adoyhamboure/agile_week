import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DatepickerMode } from 'ng2-semantic-ui';
import { DataObservableService } from '../data-observable.service';
import { tap } from 'rxjs/operators';
import { Certifications } from 'src/models/Certifications';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  private certifications$: Observable<Certifications>;
  private eventsSubscription: Subscription;
  @Input() clickEvent: Observable<void>;
  certifications: Certifications;
  mode: DatepickerMode
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.mode = "month";
    this.certifications = new Certifications;
    this.certifications.certificationsArray = [
      { period: { startDate: undefined, endDate: undefined }, label: undefined, company: undefined, description: undefined }
    ];
    this.certifications$ = this.dataObservableService.SubscribeToCertifications();
    this.fillInputs();
    this.eventsSubscription = this.clickEvent.subscribe(() => {
      this.dataObservableService.setCertifications(this.certifications.introduction, this.certifications.certificationsArray);
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  fillInputs() {
    this.certifications$.pipe(
      tap(data => {
        if (data !== undefined) {
          if (data.introduction !== undefined) {
            this.certifications.introduction = data.introduction;
          }
          if (data.certificationsArray !== undefined) {
            this.certifications.certificationsArray = data.certificationsArray;
          }
        }
      })
    ).subscribe();
  }

  addCertification(): void {
    const line = { period: { startDate: undefined, endDate: undefined }, label: undefined, company: undefined, description: undefined };
    this.certifications.certificationsArray.push(line);
  }

  removeCertification(i: number): void {
    this.certifications.certificationsArray.splice(i, 1);
  }
}
