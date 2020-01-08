import { Component, OnInit } from '@angular/core';
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
  constructor(
    private dataObservableService: DataObservableService
  ) { }

  ngOnInit() {
    this.initObservables();
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

}
