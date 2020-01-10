import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataObservableService } from '../data-observable.service';
import { Certifications } from 'src/models/Certifications';
import { Profile } from 'src/models/Profile';
import { Contacts } from 'src/models/Contacts';
import { Creations } from 'src/models/Creations';
import { Experiences } from 'src/models/Experiences';
import { Presentation } from 'src/models/Presentation';
import { References } from 'src/models/References';
import { Skills } from 'src/models/Skills';
import { Trainings } from 'src/models/Trainings';
import { DOCUMENT } from '@angular/common';
import { ExportService } from '../export.service';
import { tap } from 'rxjs/operators';
declare function showDivs(n: any): any;
@Component({
  selector: 'app-generated-cv',
  templateUrl: './generated-cv.component.html',
  styleUrls: ['./generated-cv.component.scss']
})
export class GeneratedCvComponent implements OnInit {
  certifications$: Observable<Certifications>;
  profile$: Observable<Profile>;
  contacts$: Observable<Contacts>;
  creations$: Observable<Creations>;
  experiences$: Observable<Experiences>;
  presentation$: Observable<Presentation>;
  references$: Observable<References>;
  skills$: Observable<Skills>;
  trainings$: Observable<Trainings>;
  colorBackground$: Observable<string>;
  colorTitle$: Observable<string>;
  font$: Observable<string>;
  colorDiv$: Observable<string>;
  colorBackground: string;
  colorTitle: string;
  colorDiv: string;
  font: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private exportService: ExportService,
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.colorBackground = '#D9D9D9';
    this.colorTitle = '#434343';
    this.colorDiv= '#FFFFFF'
    this.font = "Roboto";
    this.colorBackground$ = this.dataObservableService.SubscribeToColorBackground();
    this.colorTitle$ = this.dataObservableService.SubscribeToColorTitle();
    this.font$ = this.dataObservableService.SubscribeToFont();
    this.colorDiv$ = this.dataObservableService.SuscribeToColorDiv();
    this.fillPickers();
    this.initObservables();
    setTimeout(() => showDivs(1), 1);
  }

  fillPickers() {
    this.colorBackground$.pipe(
      tap(data => {
        if (data != undefined) {
          this.colorBackground = data;
        }
      })
    ).subscribe();

    this.colorTitle$.pipe(
      tap(data => {
        if (data != undefined) {
          this.colorTitle = data;
        }
      })
    ).subscribe();

    this.font$.pipe(
      tap(data => {
        if (data != undefined) {
          this.font = data;
        }
      })
    ).subscribe();

    this.colorDiv$.pipe(
      tap(data => {
        if (data != undefined) {
          this.colorDiv = data;
        }
      })
    ).subscribe();
  }

  initObservables() {
    this.certifications$ = this.dataObservableService.SubscribeToCertifications();
    this.profile$ = this.dataObservableService.SubscribeToProfile();
    this.contacts$ = this.dataObservableService.SubscribeToContacts();
    this.creations$ = this.dataObservableService.SubscribeToCreations();
    this.experiences$ = this.dataObservableService.SubscribeToExperiences();
    this.presentation$ = this.dataObservableService.SubscribeToPresentation();
    this.references$ = this.dataObservableService.SubscribeToReferences();
    this.skills$ = this.dataObservableService.SubscribeToSkills();
    this.trainings$ = this.dataObservableService.SubscribeToTrainings();
  }

  export() {
    const content: string = this.document.body.innerHTML;
    this.exportService.export(content).then(data => {
      window.open(data['url']);
    });
  }

  setColorBackgroundObservable(): void {
    this.dataObservableService.setColorBackground(this.colorBackground);
  }

  setColorTitleObservable(): void {
    this.dataObservableService.setColorTitle(this.colorTitle);
  }
 
  setFontObservable(): void {
    this.dataObservableService.setFont(this.font);
  }

  setColorDivObservable(): void {
    this.dataObservableService.setColorDiv(this.colorDiv);
  }
}
