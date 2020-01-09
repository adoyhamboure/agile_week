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
declare function showDivs(n:any):any;
@Component({
  selector: 'app-generated-cv',
  templateUrl: './generated-cv.component.html',
  styleUrls: ['./generated-cv.component.scss']
})
export class GeneratedCvComponent implements OnInit {
  certifications$: Observable<Certifications>
  profile$: Observable<Profile>;
  contacts$: Observable<Contacts>;
  creations$: Observable<Creations>;
  experiences$: Observable<Experiences>;
  presentation$: Observable<Presentation>;
  references$: Observable<References>;
  skills$: Observable<Skills>;
  trainings$: Observable<Trainings>;
  colorBackground: string;
  colorTitle: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private exportService: ExportService,
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.colorBackground = '#D9D9D9';
    this.colorTitle = '#434343'
    this.initObservables();
    setTimeout(() => showDivs(1),1);
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
    this.exportService.export(content);
  }

}
