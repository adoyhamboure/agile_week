import { Injectable } from '@angular/core';
import { Presentation } from 'src/models/Presentation';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Profile } from 'src/models/Profile';
import { Skills } from 'src/models/Skills';
import { Experiences } from 'src/models/Experiences';
import { Trainings } from 'src/models/Trainings';
import { Certifications } from 'src/models/Certifications';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
  private presentation$: BehaviorSubject<Presentation> = new BehaviorSubject<Presentation>(undefined);
  private profile$: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(undefined);
  private skills$: BehaviorSubject<Skills> = new BehaviorSubject<Skills>(undefined);
  private experiences$: BehaviorSubject<Experiences> = new BehaviorSubject<Experiences>(undefined);
  private trainings$: BehaviorSubject<Trainings> = new BehaviorSubject<Trainings>(undefined);
  private certifications$: BehaviorSubject<Certifications> = new BehaviorSubject<Certifications>(undefined);
  constructor() {}

  setPresentation(interests: string, description: string, qualifications: string): void {
    let presentation = new Presentation();
    presentation.interests = interests;
    presentation.description = description;
    presentation.qualifications = qualifications;
    this.presentation$.next(presentation);
  }

  setProfile(lastName: string, firstName: string): void {
    let profile = new Profile();
    profile.lastName = lastName;
    profile.firstName = firstName;
    this.profile$.next(profile);
  }

  setSkills(introduction: string, skillsArray: any): void {
    let skills = new Skills();
    skills.introduction = introduction;
    skills.skillsArray = skillsArray;
    this.skills$.next(skills);
  }

  setExperiences(introduction: string, experiencesArray: any): void {
    let experiences = new Experiences();
    experiences.introduction = introduction;
    experiences.experiencesArray = experiencesArray;
    this.experiences$.next(experiences);
  }

  setTrainings(introduction: string, trainingsArray: any): void {
    let trainings = new Trainings();
    trainings.introduction = introduction;
    trainings.trainingsArray = trainingsArray;
    this.trainings$.next(trainings);
  }

  setCertifications(introduction: string, certificationsArray: any): void {
    let certifications = new Certifications();
    certifications.introduction = introduction;
    certifications.certificationsArray = certificationsArray;
    this.certifications$.next(certifications);
  }

  SubscribeToPresentation(): Observable<Presentation> {
    return this.presentation$.asObservable();
  }

  SubscribeToProfile(): Observable<Profile> {
    return this.profile$.asObservable();
  }

  SubscribeToSkills(): Observable<Skills> {
    return this.skills$.asObservable();
  }

  SubscribeToExperiences(): Observable<Experiences> {
    return this.experiences$.asObservable();
  }

  SubscribeToTrainings(): Observable<Trainings> {
    return this.trainings$.asObservable();
  }

  SubscribeToCertifications(): Observable<Certifications> {
    return this.certifications$.asObservable();
  }

}
